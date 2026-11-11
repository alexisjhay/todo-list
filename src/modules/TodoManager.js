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
		"High",
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
}
