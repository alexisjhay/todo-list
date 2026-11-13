import { TodoManager } from "../modules/TodoManager.js";
import { RenderTodo } from "./renderTodo.js";
import { isEmpty } from "../utils/validation.js";

const todoManager = new TodoManager();

export class RenderTodoForm {
	createForm(location, todoBody, projectArray) {
		const formInput = [
			{
				name: "title",
				element: "input",
				types: "text",
			},
			{
				name: "description",
				element: "textarea",
				types: "",
			},
			{
				name: "date",
				element: "input",
				types: "date",
			},

			{
				name: "priority",
				element: "select",
				types: "",
			},
		];

		const todoContainer = document.createElement("div");
		todoContainer.classList.add("todo-form-container");

		const form = document.createElement("form");
		form.classList.add("todo-form");

		const formHeader = document.createElement("h1");
		formHeader.textContent = "Add Todo";
		formHeader.classList.add("form-header");

		form.appendChild(formHeader);

		for (const input of formInput) {
			const container = document.createElement("div");
			container.classList.add("input-container");

			const label = document.createElement("label");
			const element = document.createElement(`${input.element}`);

			label.htmlFor = input.name;
			element.id = input.name;
			element.required = true;

			if (input.element === "input") {
				element.type = input.types;
			} else if (input.element === "select") {
				const options = ["Low", "Medium", "High"];

				for (const option of options) {
					const newOption = new Option(option, option, false, false);

					element.add(newOption);
				}
			}

			label.textContent = `${input.name[0].toUpperCase() + input.name.slice(1)}: `;

			container.appendChild(label);
			container.appendChild(element);

			form.appendChild(container);
		}

		const addTodo = document.createElement("button");
		const cancelTodo = document.createElement("button");

		addTodo.textContent = "Add Todo";
		cancelTodo.textContent = "Cancel";

		addTodo.classList.add("todo-add");
		cancelTodo.classList.add("todo-cancel");

		addTodo.type = "submit";
		cancelTodo.type = "button";

		form.addEventListener("submit", (e) => {
			e.preventDefault();

			const title = document.querySelector("#title");
			const description = document.querySelector("#description");
			const date = document.querySelector("#date");
			const priority = document.querySelector("#priority");

			const activeID = projectArray.find((project) => project.isActive)?.id;

			if (isEmpty(title)) return;
			if (isEmpty(description)) return;

			todoManager.addTodo(
				title.value.trim(),
				description.value.trim(),
				date.value,
				priority.value,
				activeID,
			);

			const render = new RenderTodo();
			render.renderTodo(todoBody, projectArray);

			todoContainer.remove();
		});

		cancelTodo.addEventListener("click", () => {
			todoContainer.remove();
		});

		form.appendChild(addTodo);
		form.appendChild(cancelTodo);

		todoContainer.appendChild(form);

		location.appendChild(todoContainer);
	}
}
