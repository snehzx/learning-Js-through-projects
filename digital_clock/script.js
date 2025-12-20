function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridian = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const sec = now.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${minutes}:${sec}`;
  document.getElementById("clock").textContent = time;
}
updateClock();
//set intervals works like set time out except it will call a function repetedly not just once

setInterval(updateClock, 1000);
