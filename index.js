const form = document.querySelector(".input-form");
const validMessage = document.querySelector(".validation-message");
const inputBox = document.querySelector(".user-input");

const validate = (e) => {
  e.preventDefault();
  if (!inputBox.validity.valid) displayError();
  else location.reload();
};

const displayError = () => {
  validMessage.classList.add("show");
};

form.addEventListener("submit", validate);
