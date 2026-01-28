let isRunning = false;
let timeLeft = 25 * 60;
let timerId = null;
update();

function update() {
  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");
  document.getElementById("time").textContent = `${minute}:${second}`;
}
function playAlarm() {
  const sound = document.getElementById("alarm");
  sound.play();
}
function start() {
  if (isRunning) return;
  isRunning = true;

  timerId = setInterval(() => {
    timeLeft--;
    update();
    if (timeLeft < 0) {
      clearInterval(timerId);
      isRunning = false;
      playAlarm();
    }
  }, 1000);
}
function stop() {
  clearInterval(timerId);
  isRunning = false;
}
function reset() {
  clearInterval(timerId);
  isRunning = false;
  timeLeft = 25 * 60;
  update();
}
function shortBreak() {
  clearInterval(timerId);
  isRunning = false;
  timeLeft = 5 * 60;
  update();
}

function longBreak() {
  clearInterval(timerId);
  isRunning = false;
  timeLeft = 10 * 60;
  update();
}
function pomo() {
  clearInterval(timerId);
  isRunning = false;
  timeLeft = 25 * 60;
  update();
}
