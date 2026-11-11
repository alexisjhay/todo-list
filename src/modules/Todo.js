export class Todo {
	constructor(title, description, dueDate, priority, projectID) {
		const uniqueId = crypto.randomUUID();

		this.id = uniqueId;
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.completed = false;
		this.projectID = projectID;
	}
}
