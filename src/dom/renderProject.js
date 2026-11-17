export class RenderProject {
	renderProject(list, projectArray) {
		list.textContent = "";

		for (const project of projectArray) {
			const listItem = document.createElement("li");
			const listName = document.createElement("span");

			const removeProject = document.createElement("button");
			removeProject.classList.add("remove-project");

			listName.textContent = project.name;
			listItem.dataset.id = project.id;
			removeProject.textContent = "X";
			removeProject.dataset.id = project.id;

			if (project.isActive) {
				listItem.classList.add("active");
				removeProject.style.visibility = "visible";
			}

			if (project.id === "0") {
				removeProject.style.visibility = "hidden";
			}

			listItem.appendChild(listName);
			listItem.appendChild(removeProject);

			list.appendChild(listItem);
		}
	}
}
