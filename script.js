console.log("script connected");

const input = document.querySelector("#task-input");
const form = document.querySelector(".input-area");
const taskList = document.querySelector("#task-list");

function addTask(event){
    event.preventDefault();
    const taskText = input.value.trim();
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    input.value = "";

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent =  "Remove";
    deleteButton.classList.add("delete-button");
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.backgroundColor = "#ff4d4d";
    deleteButton.addEventListener("click", function(){
        newTask.remove();
    })

    newTask.appendChild(deleteButton);
    
}
    
