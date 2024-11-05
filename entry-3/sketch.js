let grid = [];       // 7x6 grid for tic-tac-toe layout
let cellSizeX, cellSizeY;  // Size of each cell in the grid
let currentPlayer = 'X'; // Starting player
let draggingPiece = null; // The piece currently being dragged
let pieces = [];     // Holds "X" and "O" pieces for dragging
let showInstruction = true; // Show drag instruction initially

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");
  cellSizeX = windowWidth / 7;
  cellSizeY = windowHeight / 6;

  // Initialize grid as empty
  for (let i = 0; i < 7; i++) {
    grid[i] = [];
    for (let j = 0; j < 6; j++) {
      grid[i][j] = ''; // Empty cell
    }
  }

  // Create draggable pieces for X and O
  pieces.push(new Piece('X', 50, height - 50));
  pieces.push(new Piece('O', 150, height - 50));
}

function draw() {
  background(253, 245, 230);
  drawGrid();
  drawPieces();

  if (draggingPiece) {
    draggingPiece.x = mouseX;
    draggingPiece.y = mouseY;
  }

  // Display the instruction text if showInstruction is true
  if (showInstruction) {
    textSize(20);
    fill(0, 0, 255);
    textAlign(CENTER, CENTER);
    text("Drag", mouseX+40, mouseY);
  }
}

// Draw the 7x6 grid layout
function drawGrid() {
  stroke(0, 0, 255);
  strokeWeight(2);

  // Draw the entire 7x6 grid
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      fill(253, 245, 230);
      rect(i * cellSizeX, j * cellSizeY, cellSizeX, cellSizeY);
    }
  }

  // Draw X and O symbols in the 3x3 tic-tac-toe grid (centered)
  textSize(64);
  textAlign(CENTER, CENTER);
  noStroke(); // Disable stroke for text
  fill(0, 0, 255); // Set fill color for text
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 5; j++) {
      if (grid[i][j] !== '') {
        text(grid[i][j], i * cellSizeX + cellSizeX / 2, j * cellSizeY + cellSizeY / 2);
      }
    }
  }
}

// Draw pieces that can be dragged
function drawPieces() {
  for (let piece of pieces) {
    piece.show();
  }
}

// Check if a piece is being clicked
function mousePressed() {
  for (let piece of pieces) {
    if (piece.isMouseOver()) {
      draggingPiece = piece;
      showInstruction = false; // Hide instruction after the first drag
      break;
    }
  }
}

// Drop the piece into a cell if it’s a valid move in the 3x3 area
function mouseReleased() {
  if (draggingPiece) {
    let i = floor(mouseX / cellSizeX);
    let j = floor(mouseY / cellSizeY);

    // Check if the drop is within the tic-tac-toe 3x3 grid area and the cell is empty
    if (i >= 1 && i < 6 && j >= 1 && j < 5 && grid[i][j] === '') {
      grid[i][j] = draggingPiece.symbol;
      togglePlayer();
    }

    // Return piece to initial position
    draggingPiece.resetPosition();
    draggingPiece = null;
  }
}

// Toggle between X and O players
function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Piece class for drag-and-drop symbols
class Piece {
  constructor(symbol, x, y) {
    this.symbol = symbol;
    this.x = x;
    this.y = y;
    this.startX = x; // Store initial position
    this.startY = y;
    this.size = 60;
  }

  show() {
    noStroke(); // Disable stroke for draggable pieces
    fill(0, 0, 255);
    textSize(75);
    text(this.symbol, this.x, this.y);
  }

  // Reset piece to initial position
  resetPosition() {
    this.x = this.startX;
    this.y = this.startY;
  }

  // Check if mouse is over the piece
  isMouseOver() {
    return dist(mouseX, mouseY, this.x, this.y) < this.size / 2;
  }
}