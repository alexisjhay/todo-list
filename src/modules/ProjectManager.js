import { Project } from "./Project.js";

export let projects = [];

const savedProjects = localStorage.getItem("projects");
if (savedProjects !== null) {
	projects = JSON.parse(savedProjects);
} else {
	projects = [new Project("0", "Default", true)];
}

export class ProjectManager {
	addProject(id, name, state) {
		projects.push(new Project(id, name, state));
		localStorage.setItem("projects", JSON.stringify(projects));
	}
	deleteProject(projectID) {
		const index = projects.findIndex((project) => project.id === projectID);

		if (projectID === "0") return;

		if (index !== -1) {
			projects.splice(index, 1);
		}

		localStorage.setItem("projects", JSON.stringify(projects));
	}
	setActiveProject(projectId) {
		for (const project of projects) {
			if (projectId === project.id) {
				project.isActive = true;
			} else {
				project.isActive = false;
			}
		}

		localStorage.setItem("projects", JSON.stringify(projects));
	}
}
