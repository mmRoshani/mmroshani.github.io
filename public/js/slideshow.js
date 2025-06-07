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
  
  function toggleFullscreen() {
    const container = document.querySelector('.slideshow-container');
    
    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
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
  
  // Double-click for fullscreen
  document.querySelector('.slideshow-container').addEventListener('dblclick', function() {
    toggleFullscreen();
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
    } else if (event.key === 'f' || event.key === 'F') {
      toggleFullscreen();
    } else if (event.key === 'Escape' && document.fullscreenElement) {
      toggleFullscreen();
    }
  });
  
  // Listen for fullscreen changes to hide/show hint
  document.addEventListener('fullscreenchange', function() {
    const container = document.querySelector('.slideshow-container');
    if (document.fullscreenElement) {
      container.style.cursor = 'default';
    } else {
      container.style.cursor = 'pointer';
    }
  });
}); 