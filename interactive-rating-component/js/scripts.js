const rateButtons = document.querySelectorAll(".rating__rate-buttons button");
const submitButton = document.getElementById("submit");
let rating;

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    rating = button.textContent;
  });
});

submitButton.addEventListener("click", (e) => {
  submitButton.disabled = false;
  if (rating === undefined) {
    e.preventDefault();
    submitButton.disabled = true;
  } else {
    console.log("Rated: " + rating);
  }
});
