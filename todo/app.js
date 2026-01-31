// app.js

import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Study JavaScript", "high", "2026-12-01"));
console.log(addTask("Do homework", "medium", "2026-11-20"));
console.log(addTask("Go gym", "low", "2026-10-10"));

// 2. Display all tasks
console.log(" All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log(" Updated Tasks:");
console.log(getAllTasks());
