// const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));

// if (currentUser1) {
//   const taskForm = document.querySelector("#taskForm");
//   const taskInput = document.querySelector("#taskInput");
//   const taskList = document.querySelector("#taskList");

//   const storageKey = `tasks_${currentUser1.email}`;

//   function getTasks() {
//     const tasksJSON = localStorage.getItem(storageKey);
//     return tasksJSON ? JSON.parse(tasksJSON) : [];
//   }

//   function saveTasks(tasks) {
//     localStorage.setItem(storageKey, JSON.stringify(tasks));
//   }

//   function renderTasks(tasks) {
//     taskList.innerHTML = "";

//     tasks.forEach((task) => {
//       const li = document.createElement("li");
//       li.textContent = task.title;
//       taskList.appendChild(li);
//     });
//   }

//   let tasks = getTasks();
//   renderTasks(tasks);

//   taskForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const title = taskInput.value.trim();
//     if (!title) return;

//     const newTask = {
//       id: Date.now(),
//       title,
//       done: false,
//     };

//     tasks.push(newTask);
//     saveTasks(tasks);
//     renderTasks(tasks);

//     taskInput.value = "";
//     taskInput.focus();
//   });
// }
