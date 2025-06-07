document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  
  function changeSlide(n) {
    showSlide(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlide(slideIndex = n);
  }
  
  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const indicators = document.getElementsByClassName("indicator");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }
    
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].classList.add("active");
    }
    
    if (indicators[slideIndex - 1]) {
      indicators[slideIndex - 1].classList.add("active");
    }
  }
  
  // Navigation button event listeners
  document.querySelectorAll('.slide-nav').forEach(function(button) {
    button.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      if (action === 'prev') {
        changeSlide(-1);
      } else if (action === 'next') {
        changeSlide(1);
      }
    });
  });
  
  // Indicator event listeners
  document.querySelectorAll('.indicator').forEach(function(indicator) {
    indicator.addEventListener('click', function() {
      const slideNum = parseInt(this.getAttribute('data-slide'));
      currentSlide(slideNum);
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
      changeSlide(1);
    }
  });
}); 