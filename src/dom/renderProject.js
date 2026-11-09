export class RenderProject {
	renderProject(list, projectArray) {
		for (const project of projectArray) {
			const link = document.createElement("li");
			link.textContent = project.name;

			list.appendChild(link);
		}
	}
}
