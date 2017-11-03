/*
list is responsible for creating a single list component
*/
const List = (() => {
	let id = 0;
	return class List {
		constructor(title) {
			this.title = title;
			this.id = ++id;
			if (id === 1) {
				document.getElementById("create-task-form").style.visibility =
					"visible";
			}
			this.constructor.all.push(this);
			this.addToDropDownMenu();
			this.createListCard();
		}

		addToDropDownMenu() {
			const listSelector = document.getElementById("parent-list");
			const option = document.createElement("option");
			option.id = `list-${this.id}-option`;
			option.value = this.id;
			option.text = this.title;
			listSelector.appendChild(option);
		}

		createListCard() {
			const listSection = document.getElementById("lists");
			const div = document.createElement("div");
			div.className = "list";
			div.id = `list-${this.id}`;
			div.innerHTML = `<h2>
          <button data-id=${this.id} class="delete-list">
            X
          </button>${this.title}
        </h2>`;
			listSection.appendChild(div);
			const ul = document.createElement("ul");
			ul.id = `list-${this.id}-tasks`;
			div.appendChild(ul);
		}

		tasks() {
			Task.all.filter(task => {
				return task.listId === this.id;
			});
		}

		static destroy(id) {
			document.getElementById(`list-${id}`).remove();
			document.getElementById(`list-${id}-option`).remove();

			this.all = this.all.filter(li => {
				return li.id != id;
			});
		}
	};
})();

List.all = [];
