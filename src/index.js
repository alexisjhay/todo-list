import "./style.css";

import { RenderProject } from "./dom/renderProject.js";
import { RenderTodo } from "./dom/renderTodo.js";
import { projects, ProjectManager } from "./modules/ProjectManager.js";
import { todo, TodoManager } from "./modules/TodoManager.js";

const projectList = document.querySelector(".project-list");
const projectInput = document.querySelector("#project-input");
const projectForm = document.querySelector(".project-form");

const todoBody = document.querySelector(".main");

const projectManager = new ProjectManager();
const todoManager = new TodoManager();

projectForm.addEventListener("submit", (e) => {
	const uniqueId = crypto.randomUUID();
	e.preventDefault();

	projectManager.addProject(uniqueId, projectInput.value.trim(), false);

	renderProject();
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
	render.renderTodo(todoBody, projects);
}

function clearInput() {
	projectInput.value = "";
}

renderProject();
renderTodo();
