// Fonctionnalité 1
footer = document.querySelector("footer");
let count = 1;
// Fonctionnalité 1 bis
footer.addEventListener("click", function() {
  console.log("clique");
  console.log("clic numero: " + count);
  count++
});
// Fonctionnalité 2
hamburgerButton = document.querySelector(".navbar-toggler");
navbarHeader = document.querySelector("#navbarHeader");

hamburgerButton.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});
// Fonctionnalité 3
firstCard = document.querySelector(".col-md-4:first-of-type .card");
editButton = firstCard.querySelector(".btn-outline-secondary");

editButton.addEventListener("click", function() {
  cardText = firstCard.querySelector(".card-text");
  cardText.style.color = "red";
});

// Fonctionnalité 4
secondCard = document.querySelector(".col-md-4:nth-of-type(2) .card");
editButton = secondCard.querySelector(".btn-outline-secondary");

editButton.addEventListener("click", function() {
  const cardText = secondCard.querySelector(".card-text");
  if (cardText.style.color === "green") {
    cardText.style.color = "";
  } else {
    cardText.style.color = "green";
  }
});
// Fonctionnalité 5
uglyHead = document.querySelector("header");
linkElement = document.querySelector('link');

uglyHead.addEventListener("dblclick", function() {
  if (linkElement.disabled) {
    linkElement.disabled = false;
  } else {
    linkElement.disabled = true;
  }
});
// Fonctionnalité 6
cardText = document.querySelector(".card-text");
editView = document.querySelector(".btn-sm btn-success");