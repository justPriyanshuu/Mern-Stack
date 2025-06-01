let clock = document.getElementById("time");

setInterval(() => {
  let time = new Date();
  let hours = time.getHours();
  let period = "AM";
  if (hours > 12) {
    period = "PM";
    if (hours > 12) hours -= 12;
  }
  if (hours == 0) hours = 12;

  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  let final = `${h}:${m}:${s} ${period}`;

  clock.innerText = final;
}, 1000);
