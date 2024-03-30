// JavaScript code
const todoList = document.getElementById('todoList');
const listtodo=document.getElementById('listtodo')
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
let tasks = [];


function addTask() {
  const value = taskInput.value;
  if (value === '') {
    alert('Please enter a new task');
  } else {
    const newTask = { completed: false, value };
    const listItem = document.createElement('li');
    listItem.textContent = newTask.value;
    listItem.className = newTask.completed ? 'diffstyle' : '';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(newTask,listItem));
    listItem.appendChild(deleteButton);

    listItem.addEventListener('click',()=>toggleTask(newTask,listItem))
    tasks.push(newTask)
    todoList.appendChild(listItem);
    taskInput.value = '';
  }
  savedata();
}



function toggleTask(newTask,listItem) {
  newTask.completed=!newTask.completed;
  listItem.className = newTask.completed ? 'diffstyle' : '';
  savedata();
}

function savedata(){
  localStorage.setItem("data",listItem.innerHTML)
}
function showtasks(){
  localStorage.getItem("data")
}

addButton.addEventListener('click', addTask);
showtasks();






function deleteTask(newTask,listItem) {
  const index=tasks.indexOf(newTask);
  tasks.splice(index, 1);
  todoList.removeChild(listItem);
  savedata()
}
