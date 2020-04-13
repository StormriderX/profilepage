const inputName = document.getElementById('input-name');
const inputMail = document.getElementById('input-mail');
const inputMessage = document.getElementById('input-message');
const button = document.querySelector('.submit-button');
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector('.contact-form');
const contactBtnEl = document.getElementById('contact-btn');
const backdropEl = document.querySelector('.backdrop');
const contactSectionEl = document.getElementById('contact');
const hidePageEl = document.querySelector('.page__wrapper');
const cancelBtnEl = button.nextElementSibling;

const toggleBackdrop = () => {
  backdropEl.classList.toggle('backdrop__visible');
};

const clearUserInput = () => {
  inputName.value = '';
  inputMail.value = '';
  inputMessage.value = '';
};

const toggleContactSection = () => {
  contactSectionEl.classList.toggle('contact-section__visible');
};

const hidePageContent = () => {
  hidePageEl.classList.toggle('page-wrapper__visible');
};

const backdropAndContactHandler = () => {
  toggleBackdrop();
  toggleContactSection();
  hidePageContent();
  clearUserInput();
};

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

contactBtnEl.addEventListener('click', backdropAndContactHandler);
backdropEl.addEventListener('click', backdropAndContactHandler);
cancelBtnEl.addEventListener('click', backdropAndContactHandler);
