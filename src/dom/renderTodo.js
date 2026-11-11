import { TodoManager } from "../modules/TodoManager.js";

const todoManager = new TodoManager();

export class RenderTodo {
	renderTodo(location, projectArray) {
		location.textContent = "";

		const mainHeader = new RenderHeader();

		location.appendChild(mainHeader.renderHeader(projectArray));
	}
}

export class RenderHeader {
	renderHeader(projectArray) {
		const header = document.createElement("div");
		header.classList.add("main-header");

		const headerTitle = document.createElement("h1");
		headerTitle.classList.add("project-title");

		const activeID = projectArray.find((project) => project.isActive);

		headerTitle.textContent = activeID?.name;

		const taskLength = document.createElement("p");
		const taskSpan = document.createElement("span");
		const addTaskButton = document.createElement("button");

		taskLength.classList.add("task-length");
		taskSpan.classList.add("completed-task-length");
		addTaskButton.classList.add("add-todo");

		taskLength.textContent = `${
			todoManager.getTodosByProject(activeID?.id).length
		} Task/s`;

		taskSpan.textContent = ` · ${
			todoManager.getCompletedTodos(activeID?.id).length
		} Completed`;

		taskLength.appendChild(taskSpan);

		addTaskButton.textContent = `Add Todo`;

		header.appendChild(headerTitle);
		header.appendChild(taskLength);
		header.appendChild(addTaskButton);

		return header;
	}
}
