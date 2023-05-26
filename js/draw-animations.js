let hero = document.getElementById("hero-animation");

animationHero = bodymovin.loadAnimation({
  container: hero,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "hero.json",
});

animationHero.setSpeed(0.9);

/*GALO */
let galoHistory = document.getElementById("galo-img");

animationGalo = bodymovin.loadAnimation({
  container: galoHistory,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "galo.json",
});

galoHistory.onmouseover = function () {
  animationGalo.play();
};

galoHistory.onmouseleave = function () {
  animationGalo.pause();
};

/*COPO*/
let copoDishes = document.getElementById("glass-img");

animationCopo = bodymovin.loadAnimation({
  container: copoDishes,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "copo.json",
});

copoDishes.onmouseover = function () {
  animationCopo.play();
};

copoDishes.onmouseleave = function () {
  animationCopo.pause();
};

/*CREW*/
let crew = document.getElementById("crew-img");

animationCrew = bodymovin.loadAnimation({
  container: crew,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "crew.json",
});

crew.onmouseover = function () {
  animationCrew.play();
};

crew.onmouseleave = function () {
  animationCrew.pause();
};

/*RESERVE*/
let reserve = document.getElementById("reserve-img");

animationReserve = bodymovin.loadAnimation({
  container: reserve,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "reserve.json",
});

reserve.onmouseover = function () {
  animationReserve.play();
};

reserve.onmouseleave = function () {
  animationReserve.pause();
};
