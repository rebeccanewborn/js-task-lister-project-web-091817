document.addEventListener("DOMContentLoaded", () => {
	// your code here ....
	document.getElementById("create-task-form").style.visibility = "hidden";

	const newListForm = document.getElementById("create-list-form");
	newListForm.addEventListener("submit", function(ev) {
		ev.preventDefault();
		const listItem = new List(document.getElementById("new-list-title").value);
		newListForm.reset();
	});

	const tasksArray = [];

	const newTaskForm = document.getElementById("create-task-form");
	newTaskForm.addEventListener("submit", function(ev) {
		ev.preventDefault();

		const taskListId = parseInt(document.getElementById("parent-list").value);
		const taskDescrip = document.getElementById("new-task-description").value;
		const taskPriority = document.getElementById("new-task-priority").value;
		const newTask = new Task(taskDescrip, taskPriority, taskListId);

		newTaskForm.reset();
	});

	const allXs = document.querySelectorAll("[data-id]");
	// allXs.forEach(x =>
	// 	x.addEventListener("click", ev => {
	// 		console.log(x);
	// 	})
	// );
	document.body.addEventListener("click", function(ev) {
		if (ev.target.className === "delete-list") {
			List.destroy(ev.target.dataset.id);
		}
	});
});
