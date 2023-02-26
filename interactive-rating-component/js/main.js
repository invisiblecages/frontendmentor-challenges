const rateButtons = document.querySelectorAll(".rating__rate-buttons button");
const submitButton = document.getElementById("submit");
let rating;

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    rating = button.textContent;
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (rating === undefined) {
    submitButton.disabled = true;
  } else {
    console.log("Rated: " + rating);
    window.location.href = `thank-you.html?rating=${rating}`;
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".rating__rate-buttons") && rating !== undefined) {
    rating = undefined;
    submitButton.disabled = true;
  }
});
