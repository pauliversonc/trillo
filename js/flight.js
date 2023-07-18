'use strict'

const dateFrom = document.querySelector('#dateFrom');
const dateTo = document.querySelector('#dateTo');

// Change the color of 
const inputDateColorChange = (elDate) => {
  const isDateValid = elDate.value.length;
  elDate.style.color = isDateValid ? '#000' : '#ccc';
};


dateFrom.addEventListener('change', () => {
  inputDateColorChange(dateFrom);
})

dateTo.addEventListener('change', () => {
  inputDateColorChange(dateTo);
})

// Prevent from submitting the form
const bookForm = document.querySelector('.book__form');
bookForm.addEventListener('submit', function(e) {
  e.preventDefault();
})


// Seat dropdown toggle
const seatInput = document.querySelector('#seat');
const seatDropdown = document.querySelector('.seat');
const btnApply = document.querySelector('.btn-apply');

const toggleSeat = () => seatDropdown.classList.toggle('show');

seatInput.addEventListener('click', toggleSeat);
btnApply.addEventListener('click', toggleSeat);

// seat dropdown form plus and minus
const seatInputValue = seatInput.innerHTML;
console.log(+seatInputValue)
