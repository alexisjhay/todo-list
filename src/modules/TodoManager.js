import { Project } from "./Project.js";

export const projects = [new Project("default", "Default", true)];

export class TodoManager {
	addProject(id, name, state) {
		return projects.push(new Project(id, name, state));
	}
	setActiveProject(projectId) {
		for (const project of projects) {
			if (projectId === project.id) {
				project.isActive = true;
			} else {
				project.isActive = false;
			}
		}
	}
}
