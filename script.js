// Selecting the buttons and the background
let buttonDay = document.querySelector(".button-day");
let buttonNight = document.querySelector(".button-night");
let skyObject = document.querySelector(".background-buildings");
let starsDiv = document.querySelector(".stars-div");
let birdsDiv = document.querySelector(".birds-div");
let overlay = document.querySelector(".overlay");
let overlay2 = document.querySelector(".overlay2");
let theMoon = document.querySelector(".moon-make");
let theSun = document.querySelector(".sun-make");
let theBody = document.querySelector("body");

// Changing the background color of every part of every building
// Selecting every part of every building
// Foreground
// Selecting the parts of building 1
let fBuilding1Top = document.querySelector(".f-building-1-top");
let fBuilding1Mid = document.querySelector(".f-building-1-mid");
let fBuilding1Bottom = document.querySelector(".f-building-1-bottom");
let stripe4 = document.querySelectorAll(".stripe-4");
let stripe5 = document.querySelectorAll(".stripe-5");
let stripe6 = document.querySelectorAll(".stripe-6");
let stripe7 = document.querySelectorAll(".stripe-7");
let stripe8 = document.querySelectorAll(".stripe-8");
let bubble1 = document.querySelectorAll(".bubble-1");
let stripe1 = document.querySelectorAll(".stripe-1");
let stripe2 = document.querySelectorAll(".stripe-2");
let stripe3 = document.querySelectorAll(".stripe-3");

// Selecting the parts of building 2
let fBuilding2Top = document.querySelector(".f-building-2-top");
let fBuilding2Bottom = document.querySelector(".f-building-2-bottom");

// Selecting the parts of building 3
let fBuilding3Section1 = document.querySelector(".f-building-3-section-1");
let fBuilding3Section2 = document.querySelector(".f-building-3-section-2");
let fBuilding3Section3 = document.querySelector(".f-building-3-section-3");
let fBuilding3Section4 = document.querySelector(".f-building-3-section-4");

// Selecting the parts of building 4
let fBuilding4Section1 = document.querySelector(".f-building-4-section-1");
let fBuilding4Section2 = document.querySelector(".f-building-4-section-2");

// Selecting the parts of building 5
let fBuilding5 = document.querySelector(".f-building-5");

// Selecting the parts of building 6
let fBuilding6 = document.querySelector(".f-building-6");

// Background
// Selecting the parts of building 1
let bBuilding1Sec1 = document.querySelector(".b-building-section-1");
let bBuilding1Sec2 = document.querySelector(".b-building-section-2");
let bBuilding1Sec3 = document.querySelector(".b-building-section-3");
let bBuilding1Sec4 = document.querySelector(".b-building-section-4");

// Selecting the parts of building 2
let bBuilding2Sec1 = document.querySelector(".b-building-2-section-1");
let bBuilding2Sec2 = document.querySelector(".b-building-2-section-2");

// Selecting the parts of building 3
let bBuilding3 = document.querySelector(".b-building-3");

// Selecting the parts of building 4
let bBuilding4Sec1 = document.querySelector(".b-building-4-section-1");
let bBuilding4Sec2 = document.querySelector(".b-building-4-section-2");
let bBuilding4Sec3 = document.querySelector(".b-building-4-section-3");

buttonDay.addEventListener("click", functionDay);
buttonNight.addEventListener("click", functionNight);

function functionDay() {
  skyObject.classList.remove("moon");

  fBuilding1Top.style.borderBottom = "7vh solid var(--building-color4)";
  fBuilding1Mid.style.backgroundColor = "var(--building-color4)";
  fBuilding1Bottom.style.backgroundColor = "var(--building-color4)";
  stripe4.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color4)")
  );
  fBuilding2Top.style.borderBottom = "10vh solid var(--building-color3)";
  fBuilding2Bottom.style.backgroundColor = "var(--building-color3)";
  stripe5.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color3)")
  );
  fBuilding3Section1.style.backgroundColor = "var(--building-color1)";
  stripe6.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color1)")
  );
  fBuilding3Section2.style.backgroundColor = "var(--building-color1)";
  fBuilding3Section3.style.backgroundColor = "var(--building-color1)";
  fBuilding3Section4.style.backgroundColor = "var(--building-color1)";
  fBuilding4Section1.style.borderBottom = "5vh solid var(--building-color1)";
  fBuilding4Section2.style.backgroundColor = "var(--building-color1)";
  bubble1.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color1)")
  );
  fBuilding5.style.backgroundColor = "var(--building-color2)";
  stripe7.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color2)")
  );
  fBuilding6.style.backgroundColor = "var(--building-color3)";
  stripe8.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color3)")
  );
  bBuilding1Sec1.style.background =
    "linear-gradient( var(--building-color1), var(--window-color1))";
  bBuilding1Sec2.style.background =
    "linear-gradient( var(--building-color1), var(--window-color1))";
  bBuilding1Sec3.style.background =
    "linear-gradient( var(--building-color1), var(--window-color1))";
  bBuilding1Sec4.style.background =
    "linear-gradient( var(--building-color1) 50%, var(--window-color1))";
  bBuilding2Sec1.style.borderBottom = "5vh solid var(--building-color2)";
  bBuilding2Sec2.style.backgroundColor = "var(--building-color2)";
  stripe1.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color2)")
  );
  bBuilding3.style.backgroundColor = "var(--building-color3)";
  stripe2.forEach(
    (element) =>
      (element.style.background =
        "linear-gradient(90deg, var(--building-color3) -45%, var(--window-color3) 100%)")
  );
  bBuilding4Sec1.style.backgroundColor = "var(--building-color4)";
  bBuilding4Sec2.style.backgroundColor = "var(--building-color4)";
  bBuilding4Sec3.style.backgroundColor = "var(--building-color4)";
  stripe3.forEach(
    (element) => (element.style.backgroundColor = "var(--window-color4)")
  );

  // Making the overlay dissaper when clicking the Day button

  overlay.classList.add("none");

  // Making overlay2 visible when pressing the Day button

  overlay2.classList.remove("none");

  // Making the moon dissapear during the day

  theMoon.classList.add("none");

  //   Making the sun appear whent the Day button is clicked

  theSun.classList.remove("none");

  //   Adding a blue background on the body during the day

  theBody.style.backgroundColor = "var(--sky-color)";
}

function functionNight() {
  skyObject.classList.remove("sun");
  skyObject.classList.add("moon");

  fBuilding1Top.style.borderBottom = "7vh solid var(--dark-background)";
  fBuilding1Mid.style.backgroundColor = "var(--dark-background)";
  fBuilding1Bottom.style.backgroundColor = "var(--dark-background)";
  stripe4.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  fBuilding2Top.style.borderBottom = "10vh solid var(--dark-background)";
  fBuilding2Bottom.style.backgroundColor = "var(--dark-background)";
  stripe5.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  fBuilding3Section1.style.backgroundColor = "var(--dark-background)";
  stripe6.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  fBuilding3Section2.style.backgroundColor = "var(--dark-background)";
  fBuilding3Section3.style.backgroundColor = "var(--dark-background)";
  fBuilding3Section4.style.backgroundColor = "var(--dark-background)";
  fBuilding4Section1.style.borderBottom = "5vh solid var(--dark-background)";
  fBuilding4Section2.style.backgroundColor = "var(--dark-background)";
  bubble1.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  fBuilding5.style.backgroundColor = "var(--dark-background)";
  stripe7.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  fBuilding6.style.backgroundColor = "var(--dark-background)";
  stripe8.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  bBuilding1Sec1.style.background =
    "linear-gradient( var(--dark-background), var(--grey-background))";
  bBuilding1Sec2.style.background =
    "linear-gradient( var(--dark-background), var(--grey-background))";
  bBuilding1Sec3.style.background =
    "linear-gradient( var(--dark-background), var(--grey-background))";
  bBuilding1Sec4.style.background =
    "linear-gradient( var(--dark-background) 50%, var(--grey-background))";
  bBuilding2Sec1.style.borderBottom = "5vh solid var(--dark-background)";
  bBuilding2Sec2.style.backgroundColor = "var(--dark-background)";
  stripe1.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );
  bBuilding3.style.backgroundColor = "var(--dark-background)";
  stripe2.forEach(
    (element) =>
      (element.style.background =
        "linear-gradient(90deg, var(--dark-background) -45%, var(--grey-background) 100%)")
  );
  bBuilding4Sec1.style.backgroundColor = "var(--dark-background)";
  bBuilding4Sec2.style.backgroundColor = "var(--dark-background)";
  bBuilding4Sec3.style.backgroundColor = "var(--dark-background)";
  stripe3.forEach(
    (element) => (element.style.backgroundColor = "var(--grey-background)")
  );

  // Making the overlay reappear when clicking the Night button

  overlay.classList.remove("none");

  // Making the overlay2 dissapear when hitting the Night button

  overlay2.classList.add("none");

  // Making the moon reappear after it is removed with the Day button

  theMoon.classList.remove("none");

  //   Making the sun dissapear when the Night button is clicked

  theSun.classList.add("none");

  //   Changint the background during the night

  theBody.style.backgroundColor = "var(--whole-background)";
}
