let Clock = document.getElementById("time");

setInterval(() => {
  let time = new Date();

  let h = time.getHours();
  let m = time.getMinutes();
  let currentTime = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;

  if (alarmTime == currentTime) {
    // alert("Alarm Ringing!");
    alarmTime = null;

    let clockColor = document.querySelector(".clock");
    clockColor.classList.add("clock-red");

    setTimeout(() => {
      clockColor.classList.remove("clock-red");
    }, 2000);
  }

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let period = "AM";

  if (hour > 12) {
    period = "PM";
    hour = hour - 12;
  }
  if (hour == 0) hour = 12;
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  if (second < 10) second = `0${second}`;

  let clock = `${hour}:${minute}:${second} ${period}`;

  Clock.innerText = clock;
}, 1000);

let alarmInput = document.getElementById("alarm-time");
let setAlarm = document.getElementById("set-alarm");
let alarmTime = null;

setAlarm.addEventListener("click", () => {
  alarmTime = alarmInput.value;
  alarmInput.value = "";
});
