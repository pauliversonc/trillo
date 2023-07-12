'use strict'

const btnClose = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');

btnClose.addEventListener('click', function() {
  modal.classList.toggle('active');
})


console.log(btnClose)