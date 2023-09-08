function updateDateTime() {
  const currentTime = document.getElementById("currentTime");

  const now = new Date();
  const timeDisplay = now.toISOString().split("T")[1].slice(0, 8);

  currentTime.textContent = `${timeDisplay}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
