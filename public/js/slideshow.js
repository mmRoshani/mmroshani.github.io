document.addEventListener('DOMContentLoaded', function() {
  let currentSlideIndex = 1;
  
  // Initialize slideshow
  function initSlideshow() {
    showSlide(currentSlideIndex);
  }
  
  function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  }
  
  function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
  }
  
  function goToSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
  }
  
  function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Wrap around
    if (n > slides.length) {
      currentSlideIndex = 1;
    }
    if (n < 1) {
      currentSlideIndex = slides.length;
    }
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active from all indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    const currentSlide = slides[currentSlideIndex - 1];
    if (currentSlide) {
      currentSlide.classList.add('active');
    }
    
    // Highlight current indicator
    const currentIndicator = indicators[currentSlideIndex - 1];
    if (currentIndicator) {
      currentIndicator.classList.add('active');
    }
  }
  
  function toggleFullscreen() {
    const container = document.querySelector('.slideshow-container');
    
    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => {
          console.log('Error entering fullscreen:', err);
        });
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
  
  // Event Listeners
  
  // Navigation buttons
  const prevButton = document.querySelector('.slide-nav.prev');
  const nextButton = document.querySelector('.slide-nav.next');
  
  if (prevButton) {
    prevButton.addEventListener('click', function(e) {
      e.stopPropagation();
      prevSlide();
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', function(e) {
      e.stopPropagation();
      nextSlide();
    });
  }
  
  // Indicators
  document.querySelectorAll('.indicator').forEach(function(indicator, index) {
    indicator.addEventListener('click', function(e) {
      e.stopPropagation();
      goToSlide(index + 1);
    });
  });
  
  // Double-click on images for fullscreen
  document.querySelectorAll('.slide img').forEach(function(img) {
    img.addEventListener('dblclick', function(e) {
      e.stopPropagation();
      toggleFullscreen();
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    // Check if slideshow is visible
    const container = document.querySelector('.slideshow-container');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    // Only handle keyboard if slideshow is visible or in fullscreen
    if (!isVisible && !document.fullscreenElement) return;
    
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        if (document.fullscreenElement) {
          e.preventDefault();
          toggleFullscreen();
        }
        break;
    }
  });
  
  // Fullscreen change handler
  document.addEventListener('fullscreenchange', function() {
    const container = document.querySelector('.slideshow-container');
    if (container) {
      if (document.fullscreenElement) {
        container.style.cursor = 'default';
      } else {
        container.style.cursor = 'pointer';
      }
    }
  });
  
  // Initialize the slideshow
  initSlideshow();
}); 