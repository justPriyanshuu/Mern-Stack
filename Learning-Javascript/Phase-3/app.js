let addTask = document.querySelector(".enter-task");
let addBtn = document.querySelector(".add-btn");
let list = document.getElementById("taskLists");
addBtn.addEventListener("click", () => {
  let inputValue = addTask.value.trim();
  if(inputValue==="") return;
  // console.log(inputValue);

  let li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `<input
                class="form-check-input check-task"
                type="checkbox"
              />
              <label>
                <span class="task-text">${inputValue}</span></label
              >
              <button class="btn btn-sm btn-danger delete-btn">Delete</button>`;

  list.appendChild(li);

  let checkbox = li.querySelector(".check-task");
  let taskText = li.querySelector(".task-text");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  });

  let deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  addTask.value = "";
});

addTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
