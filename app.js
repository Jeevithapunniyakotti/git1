function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskInput.value}</span>
        <button onclick="removeTask(this)">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}
