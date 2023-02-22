const userRating = new URLSearchParams(window.location.search).get("rating");
document.getElementById("user-rating").innerHTML = userRating;
