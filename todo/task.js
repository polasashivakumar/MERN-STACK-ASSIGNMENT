// task.js

import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let taskId = 1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    return " Invalid title (min 3 characters required)";
  }

  if (!validatePriority(priority)) {
    return " Invalid priority (low, medium, high only)";
  }

  if (!validateDueDate(dueDate)) {
    return " Due date must be a future date";
  }

  const task = {
    id: taskId++,
    title,
    priority,
    dueDate,
    completed: false,
  };

  tasks.push(task);
  return " Task added successfully";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return " Task not found";
  }
  task.completed = true;
  return " Task marked as complete";
}

// Export functions
export { addTask, getAllTasks, completeTask };
