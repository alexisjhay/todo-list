import "./style.css";

import { RenderProject } from "./dom/renderProject.js";
import { RenderTodo } from "./dom/renderTodo.js";
import { projects, ProjectManager } from "./modules/ProjectManager.js";
import { todo } from "./modules/TodoManager.js";
import { RenderTodoForm } from "./dom/createTodoForm.js";
import { isEmpty } from "./utils/validation.js";

const projectList = document.querySelector(".project-list");
const projectInput = document.querySelector("#project-input");
const projectForm = document.querySelector(".project-form");

const todoBody = document.querySelector(".main");

const projectManager = new ProjectManager();

renderProject();
renderTodo();

projectForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const uniqueId = crypto.randomUUID();

	if (isEmpty(projectInput)) return;

	projectManager.addProject(uniqueId, projectInput.value.trim(), true);
	projectManager.setActiveProject(uniqueId);

	renderProject();
	renderTodo();
	clearInput();
});

projectList.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		const targetID = e.target.dataset.id;
		projectManager.setActiveProject(targetID);

		renderProject();
		renderTodo();
	}
});

function renderProject() {
	const render = new RenderProject();
	render.renderProject(projectList, projects);
}

function renderTodo() {
	const render = new RenderTodo();
	render.renderTodo(todoBody, projects, todo);
}

function clearInput() {
	projectInput.value = "";
}

todoBody.addEventListener("click", (e) => {
	if (e.target.matches(".add-todo")) {
		const render = new RenderTodoForm();
		render.createForm(document.querySelector("body"), todoBody, projects);
	}
});
