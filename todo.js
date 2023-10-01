const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  // localStorage.setItem("todos", toDos); // 로컬스토리지에 텍스트로 저장
  localStorage.setItem("todos", JSON.stringify(toDos)); // 로컬스토리지에 배열로 저장하기
}

function deleteTodo(e) {
  //   console.log(e.composedPath()); //path가 없어서 composedPath 사용
  //   console.log(e.target.parentElement); // del btn의 부모 li를 삭제
  const li = e.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  //   console.log("i will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "Delete";
  //   button.addEventListener("click", () => {
  //     console.log("lalala");
  //   });
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  //   console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  toDos.push(newTodo);

  paintTodo(newTodo);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello() {
//   console.log("Hello"); // 로컬 스토리지에 저장된 value의 개수만큼 hello를 콘솔에 출력해준다
// }

function sayHello(item) {
  console.log(`이 value는 ${item}입니다`); // 처리되는 것이 어떤 value인지 알려줌
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // 배열로 저장됨
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  // console.log(parsedToDos); // 객체로 저장됨
  // parsedToDos.forEach(sayHello); // value의 개수만큼 hello를 출력해주는 forEach ,  모든 value를 알려주는 forEach
  parsedToDos.forEach(sayHello);
  parsedToDos.forEach((e) => console.log("this is the turn of", e));
  // arrow function 결과는 같음
}
