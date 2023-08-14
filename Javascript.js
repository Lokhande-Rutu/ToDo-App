const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskInput = document.getElementById("task");
  const deadlineInput = document.getElementById("deadline");
  const priorityInput = document.getElementById("priority");
  const labelInput = document.getElementById("label");

  const taskItem = document.createElement("li");
  taskItem.className = "task";
  taskItem.innerHTML = `
    <span>${taskInput.value}</span>
    <span class="priority">${priorityInput.value}</span>
    <span>${deadlineInput.value}</span>
    <span class="label">${labelInput.value}</span>
  `;

  taskList.appendChild(taskItem);

  taskInput.value = "";
  deadlineInput.value = "";
  labelInput.value = "";
});
