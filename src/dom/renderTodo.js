import { TodoManager } from "../modules/TodoManager.js";
import { RenderTodoForm } from "./createTodoForm.js";

const todoManager = new TodoManager();

export class RenderTodo {
	renderTodo(location, projectArray) {
		location.textContent = "";

		const mainHeader = new RenderHeader();
		const mainBody = new RenderBody();

		location.appendChild(mainHeader.renderHeader(projectArray));
		location.appendChild(mainBody.renderBody(location, projectArray));
	}
}

class RenderHeader {
	renderHeader(projectArray) {
		const header = document.createElement("div");
		header.classList.add("main-header");

		const headerTitle = document.createElement("h1");
		headerTitle.classList.add("project-title");

		const projectActiveID = projectArray.find((project) => project.isActive);

		headerTitle.textContent = projectActiveID?.name;

		const taskLength = document.createElement("p");
		const taskSpan = document.createElement("span");
		const addTaskButton = document.createElement("button");

		taskLength.classList.add("task-length");
		taskSpan.classList.add("completed-task-length");
		addTaskButton.classList.add("add-todo");

		taskLength.textContent = `${
			todoManager.getIncompleteTodos(projectActiveID?.id).length
		} Task/s`;

		taskSpan.textContent = ` · ${
			todoManager.getCompletedTodos(projectActiveID?.id).length
		} Completed`;

		taskLength.appendChild(taskSpan);

		addTaskButton.textContent = `Add Todo`;

		header.appendChild(headerTitle);
		header.appendChild(taskLength);
		header.appendChild(addTaskButton);

		return header;
	}
}

class RenderBody {
	renderBody(location, projectArray) {
		const projectActiveID = projectArray.find((project) => project.isActive);
		const filtered = todoManager.getTodosByProject(projectActiveID?.id);

		const body = document.createElement("div");
		body.classList.add("main-body");

		for (const todo of filtered) {
			// CARD

			const card = document.createElement("div");
			card.classList.add("card");

			const checkBox = document.createElement("input");

			checkBox.type = "checkbox";
			checkBox.name = "done";
			checkBox.id = todo.id;

			checkBox.checked = todo.completed;

			checkBox.addEventListener("change", () => {
				const render = new RenderTodo();
				todoManager.toggleComplete(todo.id);
				render.renderTodo(location, projectArray);
			});

			// TODO DETAILS

			const todoDetails = document.createElement("div");

			const todoTitle = document.createElement("p");
			const todoDesc = document.createElement("p");
			const todoDue = document.createElement("p");

			todoDetails.classList.add("todo-details");
			todoTitle.classList.add("todo-title");
			todoDesc.classList.add("todo-description");
			todoDue.classList.add("due-date");

			todoTitle.textContent = todo.title;
			todoDesc.textContent = todo.description;
			todoDue.textContent = todo.dueDate;

			todoDetails.appendChild(todoTitle);
			todoDetails.appendChild(todoDesc);
			todoDetails.appendChild(todoDue);

			todo.completed
				? todoDetails.classList.add("completed")
				: todoDetails.classList.remove("completed");

			// CARD STATUS

			const cardStatus = document.createElement("div");
			const priority = document.createElement("span");
			const buttonDiv = document.createElement("div");
			const updateBtn = document.createElement("button");
			const deleteBtn = document.createElement("button");

			cardStatus.classList.add("card-status");
			priority.classList.add("priority");

			updateBtn.classList.add("update");
			deleteBtn.classList.add("delete");

			const formRender = new RenderTodoForm();

			updateBtn.addEventListener("click", (e) => {
				formRender.createForm(
					document.querySelector("body"),
					location,
					projectArray,
					true,
					todo.id,
				);

				const formHeader = document.querySelector(".form-header");
				const title = document.querySelector("#title");
				const description = document.querySelector("#description");
				const date = document.querySelector("#date");
				const priority = document.querySelector("#priority");

				const formButton = document.querySelector(".todo-add");

				formHeader.textContent = "Update To-Do";

				title.value = todo.title;
				description.value = todo.description;
				date.value = todo.dueDate;
				priority.value = todo.priority;

				formButton.textContent = "Update";
			});

			const prio = new CardStatus();
			const svg = new CreateSVG();

			prio.renderPriority(priority, todo.priority);

			updateBtn.appendChild(
				svg.createSVG(
					"M5,19H6.43L16.2,9.23L14.78,7.8L5,17.58V19ZM3,21V16.75L16.2,3.57q0.3-0.28 0.66-0.43T17.63,3q0.4,0 0.78,0.15T19.05,3.6L20.43,5q0.3,0.27 0.44,0.65T21,6.4q0,0.4-0.14,0.76T20.43,7.82L7.25,21H3ZM19,6.4L17.6,5L19,6.4ZM15.48,8.52L14.78,7.8L16.2,9.23l-0.72-0.7Z",
				),
			);

			deleteBtn.appendChild(
				svg.createSVG(
					"M7,21q-0.82,0-1.41-0.59T5,19V6H4V4H9V3h6V4h5V6H19V19q0,0.82-0.59,1.41T17,21H7ZM17,6H7V19H17V6ZM9,17h2V8H9v9Zm4,0h2V8H13v9ZM7,6V19V6Z",
				),
			);

			buttonDiv.appendChild(updateBtn);
			buttonDiv.appendChild(deleteBtn);

			cardStatus.appendChild(priority);
			cardStatus.appendChild(buttonDiv);

			card.appendChild(checkBox);
			card.appendChild(todoDetails);
			card.appendChild(cardStatus);

			body.appendChild(card);
		}

		return body;
	}
}

class CardStatus {
	renderPriority(span, priority) {
		if (priority === "Low") {
			span.textContent = "Low";
			span.classList.add("low");
		} else if (priority === "Medium") {
			span.textContent = "Medium";
			span.classList.add("medium");
		} else {
			span.textContent = "High";
			span.classList.add("high");
		}
	}
}

class CreateSVG {
	createSVG(pathShape) {
		const svgNS = "http://www.w3.org/2000/svg";

		const svg = document.createElementNS(svgNS, "svg");
		svg.setAttribute("width", "24");
		svg.setAttribute("height", "24");
		svg.setAttribute("viewBox", "0 0 24 24");
		svg.setAttribute("fill", "#e3e3e3");

		const path = document.createElementNS(svgNS, "path");
		path.setAttribute("d", pathShape);

		svg.appendChild(path);

		return svg;
	}
}
