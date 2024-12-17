// Burger Menu
const burgerIcon = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.off-screen-menu');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});

// Slideshow
function showSlide1(index) {
  slider1.style.transform = `translateX(-${index * 100}%)`;
}

const slider1 = document.querySelector('.slider');
const slides1 = document.querySelectorAll('.card');
let currentIndex1 = 0;

// Slideshow skifter automatisk
setInterval(() => {
  currentIndex1 = (currentIndex1 + 1) % slides1.length; // Loop tilbage til start
  showSlide1(currentIndex1);
}, 5000);

// Slideshow 2
function showSlide2(index) {
    slider2.style.transform = `translateX(-${index * 100}%)`;
  }
  
  const slider2 = document.querySelector('#extra-slider .slider');
  const slides2 = document.querySelectorAll('#extra-slider .card');
  let currentIndex2 = 0;
  
  // Slideshow skifter automatisk
  setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % slides2.length; // Loop tilbage til start
    showSlide2(currentIndex2);
  }, 5000);