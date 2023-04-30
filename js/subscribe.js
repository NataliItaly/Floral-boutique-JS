// check form validity

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  subscribeInputs.forEach((input) => console.log(input.checkValidity()));
  let nameValid = nameInput.checkValidity();
  let passwordValid = passwordInput.checkValidity();
  let passwordrepeatValid = passwordRepeatInput.checkValidity();
  let emailValid = emailInput.checkValidity();
  if (
    passwordInput.value === passwordRepeatInput.value &&
    nameValid &&
    passwordValid &&
    passwordrepeatValid &&
    emailValid
  ) {
    subscribeTitle.textContent = `Thank you, ${nameInput.value} for subscribing!`;
    subscribeTitle.classList.add("subscribe__title_complete");
    subscribeForm.remove();
  } else {
    subscribeError.textContent = "Please enter correct data";
  }
});
