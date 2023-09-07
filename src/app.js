// Get the current date and time and update the "current-time" and "current-day" elements
function updateDateTime() {
  const currentTime = document.getElementById("currentTime");
  const currentDay = document.getElementById("currentDay");
  const now = new Date();
  const timeString = now.toISOString().split("T")[1].slice(0, 8); // Format the time as a string
  const dayString = now.toLocaleDateString(undefined, { weekday: "long" }); // Get the full day name
  currentTime.textContent = `Current Time: ${timeString}`;
  currentDay.textContent = `Current Day: ${dayString}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();

/*let now = new Date();
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
weekDays.innerHTML = `${day}`;*/
