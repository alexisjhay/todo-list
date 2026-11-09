import { Project } from "./Project.js";

export const projects = [new Project(0, "Default")];

export class TodoManager {
	addProject(id, name) {
		return projects.push(new Project(id, name));
	}
}
