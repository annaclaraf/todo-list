const el = document.getElementById('tasks');

const tasks = [];

const app = {
    fetchall() {
        var data = '';

        if (tasks.length > 0) {
            for (let i = 0; i < tasks.length; i++) {
                data += `<tr>
                          <td class="taskname"> ${(i + 1)}. ${tasks[i]}</td>
                          <td><button onclick="app.update(${i})" class=" btn btnEdit">Edit</button></td>
                          <td><button onclick="app.delete(${i})" class="btn btnDelete">Delete</button></td>
                      </tr>`;
            }
        }
        el.innerHTML = data;

    },

    create() {
        const addtodo = document.getElementById('add-todo');
        const task = addtodo.value;

        if (task) {
            tasks.push(task.trim());
            addtodo.value = '';
            app.fetchall()
        }

    },

    update(item) {
        //item = posição do array
        const edittodo = document.getElementById('edit-todo');
        edittodo.value = tasks[item];

        document.getElementById('edit-box').style.display = 'block';

        document.getElementById('save-edit').onsubmit = () => {
            let task = edittodo.value;

            if (task) {
                tasks.splice(item, 1, task.trim());
                app.fetchall();
                app.closeInput();
            }
        }
    },

    delete(item) {
        // Delete the current row
        tasks.splice(item, 1);
        // Display the new list
        app.fetchall();
    },

    closeInput() {
        document.getElementById('edit-box').style.display = 'none';
    }

}

app.fetchall()