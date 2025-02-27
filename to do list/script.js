document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      // Create a new list item
      const li = document.createElement('li');
  
      // Add a checkbox for marking tasks as completed
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          taskSpan.classList.add('completed');
        } else {
          taskSpan.classList.remove('completed');
        }
      });
  
      // Add the task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      // Add a delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        li.remove();
      });
  
      // Append elements to the list item
      li.appendChild(checkbox);
      li.appendChild(taskSpan);
      li.appendChild(deleteBtn);
  
      // Add the list item to the task list
      document.getElementById('taskList').appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  });
  
  // Filter tasks: Show All
  document.getElementById('showAllBtn').addEventListener('click', function () {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => task.style.display = 'flex');
  });
  
  // Filter tasks: Show Completed
  document.getElementById('showCompletedBtn').addEventListener('click', function () {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
      if (task.querySelector('input[type="checkbox"]').checked) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    });
  });
  
  // Filter tasks: Show Remaining
  document.getElementById('showRemainingBtn').addEventListener('click', function () {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
      if (!task.querySelector('input[type="checkbox"]').checked) {
        task.style.display = 'flex';
      } else {
        task.style.display = 'none';
      }
    });
  });