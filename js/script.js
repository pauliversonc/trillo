'use strict'


// Gallery
const gallery = document.querySelector('.gallery');
const lineContainer = document.querySelector('.slider__lines');

//  Modal and slider
const modal  = document.querySelector('.modal');
const slides = document.querySelectorAll('.slide');
const lines  = document.querySelectorAll('.slider__line');
const body   = document.querySelector('.body');

let currentSlide = 0;
const maxSlide = slides.length;

gallery.addEventListener('click', function(event) {
  // Guard clause: Exit the function if the clicked element is not an img
  if (!event.target.matches('.gallery__photo')) return; 
  // get dataset value
  const selectedImg = event.target.dataset.img;
  // set clicked image
  currentSlide = +selectedImg;
  // set image preview
  goToSlide(currentSlide)
  // make the lines glow
  activateDot(currentSlide);
  // show modal
  toggleModal();
  
});


// lines add click event (event delegation)
lineContainer.addEventListener('click', function(e){
  const line = e.target.closest('.slider__line');
  // guard clause
  if(!line)return;
  // get dataset value
  const selectedLine = e.target.dataset.line;
  // set clicked image
  currentSlide = +selectedLine;
  // set image preview
  goToSlide(currentSlide)
  // make the lines glow
  activateDot(currentSlide);
});


// Event delegation to the modal
modal.addEventListener('click', function(event) {
  // close modal when modal is clicked
  if(event.target.matches('.modal')) toggleModal();
  // close modal when close btn is clicked
  if(event.target.matches('.modal__close-btn')) toggleModal();
  const ctrlBtn = event.target.closest('.slider__btn');
  // Guard Clause
  if(!ctrlBtn) return;
  // get clicked slider btn
  const side = ctrlBtn.dataset.pos;
  // if left btn is clicked run prev slide
  if (side === 'left') prevSlide();
  // if right btn is clicked run next slide
  if (side === 'right') nextSlide();
})


// Close and Open modal
const toggleModal = function() {
  modal.classList.toggle('active');
  // Remove Y scroll in the body element
  body.classList.toggle('no-scroll');
}

// Change the position of current photo in image slider
const goToSlide = function(slide) {
  slides.forEach((el, i) => el.style.transform = `translateX(${100 * (i - slide)}%)`);
}

// Add an active to lines
const activateDot = function(slide) {
  // remove active to all lines
  lines.forEach((line) => {
    line.classList.remove('active');
  })

  // add active to line dependng on current slide
  const line = document.querySelector(`.slider__line[data-line="${slide}"]`);
  line.classList.add('active');
}

/**
 * This function moves to the next slide in the image carousel.
 *
 * If the current slide is the last slide, the function resets the current slide to 0.
 * Otherwise, the function increments the current slide by 1.
 *
 * The function then calls the `activateDot` and `goToSlide` functions to update the UI.
 */
const nextSlide = () => {
  if (currentSlide === 2) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  activateDot(currentSlide);
  goToSlide(currentSlide);
};

/**
 * This function moves to the previous slide in the image carousel.
 *
 * If the current slide is the first slide, the function resets the current slide to 2.
 * Otherwise, the function decrements the current slide by 1.
 *
 * The function then calls the `activateDot` and `goToSlide` functions to update the UI.
 */
const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = 2;
  } else {
    currentSlide--;
  }
  activateDot(currentSlide);
  goToSlide(currentSlide);
};

// const navItem  = document.querySelectorAll('.side-nav__item');

// const sidenav = document.querySelector('.sidebar');
// sidenav.addEventListener('click', function(e){
//   // e.preventDefault();
//   const matchedEl = e.target.closest('.side-nav__link');
//   if(!matchedEl) return

//   // remove active to all navItem
//   navItem.forEach((line) => {
//     line.classList.remove('side-nav__item--active');
//   })

//   const selectedNavItem = matchedEl.closest('.side-nav__item')
//   selectedNavItem.classList.add('side-nav__item--active');


// });

// const activateLink = function() {

// };











// Get the input fields
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

// Add event listeners to the inputs
startDateInput.addEventListener('change', updateEndDateInput);
endDateInput.addEventListener('change', updateStartDateInput);

// Update the minimum selectable date for the end date input
function updateEndDateInput() {
  const startDate = new Date(startDateInput.value);
  endDateInput.min = formatDate(startDate);
}

// Update the maximum selectable date for the start date input
function updateStartDateInput() {
  const endDate = new Date(endDateInput.value);
  startDateInput.max = formatDate(endDate);
}

// Format the date as "YYYY-MM-DD"
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
