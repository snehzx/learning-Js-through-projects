const dis = document.getElementById("dis");
let timer = null;
let strt = 0;
let time = 0;
let run = false;
function start() {
  if (!run) {
    strt = Date.now() - time;
    timer = setInterval(update, 10);
    run = true;
  }
}
function stop() {
  if (run) {
    clearInterval(timer);
    time = Date.now() - strt;
    run = false;
  }
}
function reset() {
  clearInterval(timer);
  let strt = 0;
  let time = 0;
  let run = false;
  dis.textContent = "00:00:00:00";
}
function update() {
  const currentTime = Date.now();
  time = currentTime - strt;
  let hour = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let sec = Math.floor((time / 1000) % 60);
  let mili = Math.floor((time % 1000) / 10);
  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  mili = String(mili).padStart(2, "0");

  dis.textContent = `${hour}:${minutes}:${sec}:${mili}`;
}
