// Variable

const startstopbtn = document.querySelector("#startstopbtn");
const resetbtn = document.querySelector("#resetbtn");

// Variable for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Varible for leading zeros

let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

// Variables for setInterval and timerStatus

let timerInterval = null;
let timerStatus = "stopped";

// StopWatch

function StopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }
  if (minutes < 10) {
    leadingminutes = "0" + minutes.toString();
  } else {
    leadingminutes = minutes;
  }
  if (hours < 10) {
    leadinghours = "0" + hours.toString();
  } else {
    leadinghours = hours;
  }

  let DisplayTimer = (document.getElementById("timer").innerHTML =
    leadinghours + ":" + leadingminutes + ":" + leadingseconds);
}

startstopbtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(StopWatch, 1000);
    document.getElementById("startstopbtn").innerHTML = `
    <i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById("startstopbtn").innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetbtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  document.getElementById("startstopbtn").innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  timerStatus = "stopped";
});
