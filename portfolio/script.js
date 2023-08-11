var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


// Get the slider container
const slider = document.querySelector('.about-container');

// Get all the slide images
const slides = slider.querySelectorAll('blockquote');

// Set initial slide index
let currentSlide = 0;

// Function to show the current slide
function showSlide() {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[currentSlide].style.display = 'block';
}

// Function to switch to the next slide
function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
}

// Set timer to switch slides automatically every 3 seconds
setInterval(nextSlide, 10000);

// Optional: Add navigation buttons
const prevButton = document.querySelector('.bott--left');
prevButton.addEventListener('click', () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide();
});

const nextButton = document.querySelector('.bott--right');
nextButton.addEventListener('click', nextSlide);




const dots = document.querySelectorAll('.dot');

// Show the initial slide
slides[currentSlide].style.display = 'block';
dots[currentSlide].classList.add('active');

// Function to switch slides
const changeSlide = (n) => {
  slides[currentSlide].style.display = 'none';
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
};

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    changeSlide(index);
  });
});

AOS.init();

const burger = document.getElementById('.burger');
const navList = document.getElementById('.nav-list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});
