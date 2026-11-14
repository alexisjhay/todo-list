import { Todo } from "./Todo.js";

export const todo = [
	new Todo(
		"Finish JavaScript course",
		"Complete the DOM manipulation lesson",
		"2026-11-12",
		"High",
		"1",
	),
	new Todo(
		"Read a book",
		"Read 20 pages of Atomic Habits",
		"2026-11-11",
		"Low",
		"2",
	),
	new Todo(
		"Build Todo App",
		"Implement the todo creation feature",
		"2026-11-13",
		"High",
		"0",
	),

	new Todo(
		"Build Todo App",
		"Implement the todo creation feature",
		"2026-11-13",
		"Medium",
		"2",
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
