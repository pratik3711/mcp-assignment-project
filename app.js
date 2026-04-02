// app.js — Today Only

const input   = document.getElementById("task-input");
const addBtn  = document.getElementById("add-btn");
const list    = document.getElementById("task-list");

// ── Add Task ──────────────────────────────────────────
function addTask() {
  const text = input.value.trim();
  if (!text) return;          // ignore empty input

  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
  <input type="checkbox" class="checkbox" />
  <span class="task-text">${text}</span>
  <button class="delete-btn">X</button>
`;
const checkbox = li.querySelector(".checkbox");
const taskText = li.querySelector(".task-text");

checkbox.addEventListener("change", () => {
  taskText.classList.toggle("completed");
});
const deleteBtn = li.querySelector(".delete-btn");

deleteBtn.addEventListener("click", () => {
  li.remove();
});

  list.appendChild(li);
  input.value = "";
  input.focus();
}

// ── Event Listeners ───────────────────────────────────
addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});