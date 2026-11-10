import "./style.css";

import { RenderProject } from "./dom/renderProject.js";
import { projects } from "./modules/TodoManager.js";
import { TodoManager } from "./modules/TodoManager.js";

const projectList = document.querySelector(".project-list");
const mainLsit = document.querySelector(".main-list");
const projectInput = document.querySelector("#project-input");
const projectForm = document.querySelector(".project-form");

const todoManager = new TodoManager();

projectForm.addEventListener("submit", (e) => {
	const uniqueId = crypto.randomUUID();
	e.preventDefault();

	todoManager.addProject(uniqueId, projectInput.value.trim(), false);

	renderProject();
	clearInput();
});

projectList.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		todoManager.setActiveProject(e.target.dataset.id);
		renderProject();
	}
});

function renderProject() {
	const render = new RenderProject();
	render.renderProject(projectList, projects);
}

function clearInput() {
	projectInput.value = "";
}

renderProject();
