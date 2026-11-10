export class RenderProject {
	renderProject(list, projectArray) {
		list.textContent = "";

		for (const project of projectArray) {
			const listItem = document.createElement("li");

			listItem.textContent = project.name;
			listItem.dataset.id = project.id;

			if (project.isActive) {
				listItem.classList.add("active");
			}

			list.appendChild(listItem);
		}
	}
}
