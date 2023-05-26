document.getElementById("go-down").addEventListener("click", function () {
  window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" }); // Rola 100vh para baixo (ou seja, a altura da janela)
});

document.getElementById("go-up").addEventListener("click", function () {
  window.scrollBy({ top: -window.innerHeight / 2, behavior: "smooth" }); // Rola 100vh para baixo (ou seja, a altura da janela)
});

//Logo
document
  .getElementById("logo-header")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var logoSection = document.getElementById("hero");
    logoSection.scrollIntoView({ behavior: "smooth" });
  });

//History
document
  .getElementById("history_link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var historySection = document.getElementById("history");
    historySection.scrollIntoView({ behavior: "smooth" });
  });

//Dishes
document
  .getElementById("dishes_link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var dishesSection = document.getElementById("dishes");
    dishesSection.scrollIntoView({ behavior: "smooth" });
  });

//Crew
document
  .getElementById("crew_link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var crewSection = document.getElementById("crew");
    crewSection.scrollIntoView({ behavior: "smooth" });
  });

//Reeserve
document
  .getElementById("reserve_link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var reserveSection = document.getElementById("reserve");
    reserveSection.scrollIntoView({ behavior: "smooth" });
  });

//Arrow Hero
document
  .getElementById("arrow-hero")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var arrowHeroSection = document.getElementById("history");
    arrowHeroSection.scrollIntoView({ behavior: "smooth" });
  });

//Dishes button
document
  .getElementById("dishes-to-reserve")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var dishesButtonSection = document.getElementById("reserve");
    dishesButtonSection.scrollIntoView({ behavior: "smooth" });
  });

//Footer logo
document
  .getElementById("footer-logo")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var footerButtonSection = document.getElementById("hero");
    footerButtonSection.scrollIntoView({ behavior: "smooth" });
  });
