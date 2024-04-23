// Menu
const menuToggle = document.querySelector(".bar");
const navigation = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("toggle-menu");
});

// Services
const serviceCards = document.querySelectorAll(".box");
const serviceTitles = document.querySelectorAll(".box h3");
const serviceExpandDots = document.querySelectorAll(".dots span");

serviceExpandDots.forEach((span, i) => {
  span.addEventListener("click", () => {
    resetServices();

    serviceCards[i].classList.add("actives");
    serviceTitles[i].classList.add("active");
    span.classList.add("dot");
    serviceCards[i].scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function resetServices() {
  serviceCards.forEach((box) => {
    box.classList.remove("actives");
  });
  serviceTitles.forEach((h2) => {
    h2.classList.remove("active");
  });
  serviceExpandDots.forEach((span) => {
    span.classList.remove("dot");
  });
}


