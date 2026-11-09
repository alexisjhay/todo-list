import "./style.css";

import { RenderProject } from "./dom/renderProject.js";
import { projects } from "./modules/TodoManager.js";
import { TodoManager } from "./modules/TodoManager.js";

const projectList = document.querySelector(".project-list");
const projectInput = document.querySelector("#project-input");
const projectForm = document.querySelector(".project-form");

const todoManager = new TodoManager();
const uniqueId = crypto.randomUUID();

projectForm.addEventListener("submit", (e) => {
	e.preventDefault();

	todoManager.addProject(uniqueId, projectInput.value);
	renderProject();
	clearInput();
});

function renderProject() {
	const render = new RenderProject();

	clearProjectList();
	render.renderProject(projectList, projects);
}

function clearProjectList() {
	projectList.textContent = "";
}

function clearInput() {
	projectInput.value = "";
}

renderProject();
