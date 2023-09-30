const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

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
  paintTodo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
