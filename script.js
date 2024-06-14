// Todo List
const todoList = document.getElementById("todos");
function renderTodoList() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todoList.innerHTML = todos
    .map(
      (todo, index) => `
    <li>
      ${todo}
      <div><button onclick="editTodo(${index})"><i class="fa-solid fa-pen" style="color: rgb(0, 255, 38);"></i></button>
      <button onclick="deleteTodo(${index})"><i class="fa-solid fa-trash-can" style="color: red;"></i></button></div>
    </li>
  `
    )
    .join("");
  document.getElementById("todos").style.display = "flex";
}
renderTodoList();

document.getElementById("add-todo").addEventListener("click", () => {
  const todo = document.getElementById("todo-item").value;
  if (todo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodoList();
    document.getElementById("todo-item").value = "";
    document.getElementById("todos").style.display = "flex";
    document.getElementById("para").style.display = "none";
  }
});

window.editTodo = (index) => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const newTodo = prompt("Edit todo:", todos[index]);
  if (newTodo) {
    todos[index] = newTodo;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodoList();
    document.getElementById("todos").style.display = "flex";
  }
};

window.deleteTodo = (index) => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
  
  
};
if(todoList == ""){
  document.getElementById("todos").style.display = "none";
  document.getElementById("para").style.display = "block";
}
