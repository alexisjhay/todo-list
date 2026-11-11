import { TodoManager } from "../modules/TodoManager.js";

const todoManager = new TodoManager();

export class RenderTodo {
	renderTodo(location, projectArray, todoArray) {
		location.textContent = "";

		const mainHeader = new RenderHeader();

		location.appendChild(mainHeader.renderHeader(projectArray, todoArray));
	}
}

export class RenderHeader {
	renderHeader(projectArray, todoArray) {
		const header = document.createElement("div");
		header.classList.add("main-header");

		const headerTitle = document.createElement("h1");
		headerTitle.classList.add("project-title");

		const activeID = projectArray.find((project) => project.isActive);

		headerTitle.textContent = activeID?.name;

		const taskLength = document.createElement("p");
		const taskSpan = document.createElement("span");

		taskLength.classList.add("task-length");
		taskSpan.classList.add("completed-task-length");

		taskLength.textContent = `${
			todoManager.getTodosByProject(activeID?.id).length
		} Task/s`;

		taskSpan.textContent = ` · ${
			todoManager.getCompletedTodos(activeID?.id).length
		} Completed`;

		taskLength.appendChild(taskSpan);

		header.appendChild(headerTitle);
		header.appendChild(taskLength);

		return header;
	}
}
