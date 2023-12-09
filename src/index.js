document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value;

    // Update the task list with the typed task
    updateTaskList(taskText);
  });

  function updateTaskList(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      // Call a function to remove the task when the delete button is clicked
      removeTask(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }

  function removeTask(taskItem) {
    // Remove the task item from the task list
    taskList.removeChild(taskItem);
  }
});

