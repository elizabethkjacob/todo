
function fetchTasks() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          reject('Failed to fetch tasks');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Function to initialize the to-do list with tasks fetched from the API
async function initializeToDoList() {
  try {
    const tasks = await fetchTasks();
    const tableBody = document.querySelector('#taskTable tbody');
    tasks.forEach(task => {
      const row = document.createElement('tr');
      row.innerHTML = `
        
        <td>${task.title}</td>
       <td><input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion(this, ${task.id})"></td>

        
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

// Function to toggle task completion
function toggleTaskCompletion(checkbox, taskId) {
  const row = checkbox.parentNode.parentNode;
  row.classList.toggle('completed');

  // Check if 5 tasks have been completed
  const completedRows = document.querySelectorAll('.completed');
  if (completedRows.length === 5) {
    alert('Congrats. 5 Tasks have been Successfully Completed');
  }
}

// Initialize the to-do list when the page loads
window.onload = initializeToDoList;