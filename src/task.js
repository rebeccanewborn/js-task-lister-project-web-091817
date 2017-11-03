/*
task is responsible for creating a single task object
*/
const Task = (() => {
	let id = 0;
	return class Task {
		constructor(description, priority, listId) {
			//your code here
			this.description = description;
			this.priority = priority;
			this.listId = listId;
			this.id = ++id;

			this.addToList();

			this.constructor.all.push(this);
		}

		addToList() {
			const listUL = document.querySelector(`#list-${this.listId} ul`);
			const li = document.createElement("li");
			li.innerHTML = `Task: ${this.description} <br> Priority: ${this
				.priority}`;
			listUL.appendChild(li);
		}
	};
})();

Task.all = [];
