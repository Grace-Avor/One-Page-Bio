function updateDateTime() {
  const currentTime = document.getElementById("currentTime");
  const currentDay = document.getElementById("currentDay");

  const now = new Date();
  const timeDisplay = now.toISOString().split("T")[1].slice(0, 8);
  const dayDisplay = now.toLocaleDateString(undefined, { weekday: "long" });

  currentTime.textContent = `Time: ${timeDisplay}`;
  currentDay.textContent = `Day: ${dayDisplay}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
