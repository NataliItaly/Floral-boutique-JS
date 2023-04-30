submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //subscribeForm.remove();
  //if ()
  subscribeInputs.forEach((input) => console.log(input.valid === true));
  subscribeTitle.textContent = "Thank you for subscribing!";
  subscribeTitle.classList.add("subscribe__title_complete");
});
