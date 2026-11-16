import { Todo } from "./Todo.js";

export const todo = [
	new Todo(
		"Study CSS Grid",
		"Practice building responsive layouts",
		"2026-11-12",
		"High",
		"0",
	),
	new Todo(
		"Water the plants",
		"Water all indoor plants",
		"2026-11-19",
		"Low",
		"0",
	),
	new Todo(
		"Prepare presentation",
		"Create slides for the weekly meeting",
		"2026-11-14",
		"High",
		"0",
	),
	new Todo(
		"Wash the car",
		"Clean the exterior and interior",
		"2026-11-21",
		"Medium",
		"0",
	),
	new Todo(
		"Update resume",
		"Add recent projects and skills",
		"2026-11-09",
		"Medium",
		"0",
	),
];

export class TodoManager {
	getTodosByProject(projectID) {
		return todo.filter((todo) => todo.projectID === projectID);
	}
	getCompletedTodos(projectID) {
		return todo.filter(
			(todo) => todo.projectID === projectID && todo.completed,
		);
	}
	getIncompleteTodos(projectID) {
		return todo.filter(
			(todo) => todo.projectID === projectID && todo.completed === false,
		);
	}
	getPriorityTodo(projectID, priority) {
		return todo.filter(
			(todo) => todo.projectID === projectID && todo.priority === priority,
		);
	}
	getOverdueTodo(projectID) {
		return todo.filter(
			(todo) =>
				todo.projectID === projectID &&
				todo.dueDate < new Date().toISOString().split("T")[0] &&
				todo.completed === false,
		);
	}
	toggleComplete(targetID) {
		const id = todo.find((todo) => todo.id === targetID);

		if (!id) return;

		id.completed = !id.completed;

		return id.completed;
	}
	addTodo(title, description, dueDate, priority, projectID) {
		return todo.push(
			new Todo(title, description, dueDate, priority, projectID),
		);
	}
	updateTodo(todoID, title, description, dueDate, priority) {
		const targetTodo = todo.find((todo) => todo.id === todoID);

		if (targetTodo) {
			targetTodo.title = title;
			targetTodo.description = description;
			targetTodo.dueDate = dueDate;
			targetTodo.priority = priority;
		}
	}
}
