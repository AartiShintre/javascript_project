const todoInput = document.getElementById("newText");
const addTaskButton = document.getElementById("addText");
const todoList = document.getElementById("todo-list");

let tasks =[];
 addTaskButton.addEventListener("click",()=>{
    const taskText = todoInput.value.trim()
    if(taskText === "") return;
    const newTask = {
        id : Date.now(),
        text : taskText,
        completed : false
    }
    tasks.push(newTask)
    todoInput.value = "";
    console.log(tasks);
    const li = document.createElement("li");
li.textContent = newTask.text;
todoList.appendChild(li);

 })
