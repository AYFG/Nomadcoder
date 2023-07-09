const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //   greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  //   greeting.classList.remove(HIDDEN_CLASSNAME);
}
// form은 submit 시키는데 ㅍpreventDefault()가 submit을 막아준다
// function onLoginSubmit(tomato) {
//   tomato.preventDefault();
//   //   const username = loginInput.value;
//   console.log(tomato);
// }
loginForm.addEventListener("submit", onLoginSubmit);
// () 를 더하면 브라우저가 보자마자 function을 실행시킴
