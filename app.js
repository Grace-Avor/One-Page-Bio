const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
let date = document.querySelector("#weekDays");
date.innerHTML=(dayOfWeek);

function updateUTCTime() {
  const now = new Date();
  const utcMilliseconds = now.getTime();
  document.getElementById("currentTime").textContent = utcMilliseconds;
}
setInterval(updateUTCTime, 100);

