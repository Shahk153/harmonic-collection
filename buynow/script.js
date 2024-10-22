function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
  }
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const offset = slideIndex * -350; // 350px is the width of each image
    document.querySelector(".carousel-slide").style.transform = `translateX(${offset}px)`;
  }