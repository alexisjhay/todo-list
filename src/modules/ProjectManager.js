import { Project } from "./Project.js";

export const projects = [
	new Project("0", "Default", true),
	new Project("1", "Work", false),
	new Project("2", "School", false),
];

export class ProjectManager {
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
