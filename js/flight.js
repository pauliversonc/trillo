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

// seat dropdown form increase decrease
const seatInputValue = seatInput.innerHTML; // final output

seatDropdown.addEventListener('click', function(e) {
  const btn = e.target.closest('.seat__btn');
  if(!btn) return;
  const btnPos = e.target.dataset.btn;

  if(btnPos === 'plus') {
    const nearestSpan = btn.previousElementSibling;
    updateNum(nearestSpan, btnPos);
  }

  if(btnPos === 'minus') {
    const nearestSpan = btn.nextElementSibling;
    updateNum(nearestSpan, btnPos);
  }

})


const updateNum = (spanEl, btn) => {
  const span = spanEl;
  const spanVal = spanEl.innerHTML;

  
  if(btn === 'plus') {
    const newNum = +spanVal + 1;
    span.innerHTML = newNum
  }

  if(btn === 'minus') {
    if (+spanVal <= 0) return
    const newNum = +spanVal - 1;
    span.innerHTML = newNum
  }

  sumSeat();
}


const sumSeat = () => {
  const spans = document.querySelectorAll('.seat__num');

  const siblingArray = Array.from(spans);

  const sumReduce = siblingArray.reduce((acc, element) => {
    return acc + parseInt(element.innerHTML);
  }, 0);

  seatInput.innerHTML = sumReduce;

  if(sumReduce) {
    seatInput.style.color = '#000';
  } else {
    seatInput.style.color = '#ccc';
  }
}


const bookHeader = document.querySelector('.book__header');
const btnsHeader = document.querySelectorAll('.book__header-btn');
const returnDate = document.querySelector('.book__form-group--dateTo');
bookHeader.addEventListener('click', function(e) {


  const btn = e.target.closest('.book__header-btn');
  if(!btn) return

  btnsHeader.forEach(btn => {
    btn.classList.remove('active')
  })

  btn.classList.add('active');
  if(btn.dataset.trip === 'tripa') returnDate.classList.add('hide');
  if(btn.dataset.trip === 'tripb') returnDate.classList.remove('hide');
})
