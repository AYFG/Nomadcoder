const clock = document.querySelector("h2#clock");
// clock.textContent = "lalalal";

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //   const milliSec = String(date.getMilliseconds());
  //   clock.textContent = `${hours}:${minutes}:${seconds}:${milliSec}`;
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 먼저 실행해주지 않으면 00시가 먼저 표시됨
setInterval(getClock, 1); // 1. 내가 실행하고자 하는 function 2. 호출되는 function 간격을 몇 ms 로 할지

// setTimeout(getClock, 5000); //5초 뒤 function 실행
