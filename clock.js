const clock = document.querySelector("h2#clock");
// clock.textContent = "lalalal";

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000); // 1. 내가 실행하고자 하는 function 2. 호출되는 function 간격을 몇 ms 로 할지
