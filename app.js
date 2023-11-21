function addTask() {
  const taskText = document.getElementById("inputTask");
  const taskList = document.getElementById("taskList");

  if (taskText.value.trim() != "") {
    const taskTextNode = document.createTextNode(taskText.value);
    const newTask = document.createElement("li");
    newTask.appendChild(taskTextNode);

    newTask.onclick = function () {
      this.classList.toggle("completed");
    };
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&nbsp;&nbsp;&nbsp;&times;";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.fontSize="23px"
    deleteButton.onclick = function () {
      taskList.removeChild(newTask);
    };
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
    taskText.value = "";
  } else {
    alert("Please enter new task!");
  }
}
