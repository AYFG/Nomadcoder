const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// form은 submit 시키는데 preventDefault()가 submit을 막아준다
// function onLoginSubmit(tomato) {
//   tomato.preventDefault();
//   //   const username = loginInput.value;
//   console.log(tomato);
// }
// () 를 더하면 브라우저가 보자마자 function을 실행시킴
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
// local storage (애플리케이션)
// 브라우저에 뭔가를 저장할 수 있음
// localStorage.setItem(키,값 저장),getItem(키,값 불러오기),removeItem(키,값 삭제)
