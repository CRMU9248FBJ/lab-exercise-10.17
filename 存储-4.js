// 页面加载后绑定按钮事件
window.onload = function () {
    const addButton = document.getElementById("addTaskButton");
    addButton.addEventListener("click", addTask); // 确保事件绑定成功
};

// 添加任务到列表和本地存储
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task) {
        let tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
        taskInput.value = ""; // 清空输入框
        displayTasks(); // 刷新任务列表
    }
}

// 从本地存储中获取任务数组
function getTasks() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// 将任务数组保存到本地存储
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 从列表中删除任务
function removeTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    displayTasks();
}

// 显示任务列表
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = getTasks();
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeTask(index);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// 加载并显示任务列表
window.onload = function () {
    displayTasks();
};
