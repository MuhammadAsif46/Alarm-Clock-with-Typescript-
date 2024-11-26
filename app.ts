

// Get DOM elements
let currentTimeEl = document.getElementById("currentTime") as HTMLDivElement;
let alarmTimeEl = document.getElementById("alarmTime") as HTMLInputElement;
let setAlarmBtn = document.getElementById("setAlarmBtn") as HTMLButtonElement;
let clearAlarmBtn = document.getElementById("clearAlarmBtn") as HTMLButtonElement;
let alarmMessageEl = document.getElementById("alarmMessage") as HTMLParagraphElement;

let alarmTime: string | null = null;
let alarmTimeout: string | null = null;

// Update current time every second
function updateTime(): void {
  let now = new Date();
  let timeString = now.toLocaleTimeString("en-US", { hour12: true });

  if (currentTimeEl) {
    currentTimeEl.textContent = timeString;
  }

  // Check if alarm time matches current time
  if (alarmTime === timeString) {
    ringAlarm();
  }
}

function ringAlarm(): void {
  let alarmAudio = new Audio("alarm-music.mp3");
  alarmAudio.play();

  alarmMessageEl.textContent = "Wake Up! Alarm Ringing!";
  console.log("Wake Up! Alarm Ringing!");
  alarmMessageEl.classList.remove("hidden");
  clearAlarm();
}

// Set the alarm
function setAlarm(): void {
  if (!alarmTimeEl.value) {
    alert("Please select a valid time for the alarm!");
    return;
  }

  alarmTime = new Date().toLocaleDateString() + " " + alarmTimeEl.value;
  alarmTime = new Date(alarmTime).toLocaleTimeString("en-US", { hour12: true });

  alarmMessageEl.textContent = "Alarm Set!";
  alarmMessageEl.classList.remove("hidden");

  console.log(`Alarm set for: ${alarmTime}`);;
}

// Clear the alarm
function clearAlarm(): void {
  alarmTime = null;
  alarmMessageEl.classList.add("hidden");

  
}

// Event listeners
setAlarmBtn.addEventListener("click", setAlarm);
clearAlarmBtn.addEventListener("click", clearAlarm);

// Initialize clock
setInterval(updateTime, 1000);
