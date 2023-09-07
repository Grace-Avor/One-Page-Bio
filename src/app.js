let now = new Date();
let minutes = now.getUTCMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getUTCHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let day = now.getUTCDay();
let days = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Thursday",
  "Tuesday",
  "Wednesday",
];
day = days[now.getUTCDay()];

let time = document.querySelector("h3");
time.innerHTML = `${hours}:${minutes}`;

let weekDays = document.querySelector("h2");
weekDays.innerHTML = `${day}`;
