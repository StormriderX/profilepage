const inputName = document.getElementById('input-name');
const inputMail = document.getElementById('input-mail');
const inputMessage = document.getElementById('input-message');
const button = document.querySelector('.submit-button');
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector('.contact-form');

const checkInput = () => {
  if (
    inputName.value.trim() !== '' &&
    regEx.test(inputMail.value) &&
    inputMessage.value.trim() !== ''
  ) {
    button.style.backgroundColor = '#3287a8';
    button.disabled = false;
  } else {
    button.style.backgroundColor = '#3a3e3b';
    button.disabled = true;
  }
};
