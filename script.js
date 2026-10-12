const todolist = JSON.parse(localStorage.getItem('todolist')) || [];
renderTodolist();
function renderTodolist() {
    let todolistHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const { name, dueDate, done } = todoObject;
        const html = `<div class="todo-row">
        <input type="checkbox" class="done-checkbox" 
        onchange="toggleDone(${i})" ${done ? 'checked' : ''}>
        <span class="todo-name ${done ? 'done' : ''}">
        ${name} </span>
        ${dueDate ? `<span class="todo-date"> ${dueDate} </span>` : ''}
        <button class = "del-btn">DELETE</button>
        </div>`;
        todolistHTML += html;
    }
    document.querySelector('.result').innerHTML = todolistHTML;
    document.querySelectorAll('.del-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            deleteTodo(index)
        })

    });
}

document.querySelector('#add-btn').addEventListener('click', () => {
    addTodo();
})
function addTodo() {
    const inputElement = document.querySelector('#task-input');
    const dateInputElement = document.querySelector('#js-due-date-input');
    const dueDate = dateInputElement.value;
    const name = inputElement.value.trim();
    if (name === '') {
        document.querySelector('#error-msg').textContent = 'Please enter a task name.';
        return;
    }
    document.querySelector('#error-msg').textContent = ''

    todolist.push({ name, dueDate, done: false });
    saveToStorage();
    inputElement.value = '';
    dateInputElement.value = '';
    renderTodolist();
}

function toggleDone(i) {
    todolist[i].done = !todolist[i].done;
    saveToStorage();
    renderTodolist();

}

function deleteTodo(i) {
    todolist.splice(i, 1);
    saveToStorage();
    renderTodolist();
}
function saveToStorage() {
    localStorage.setItem('todolist', JSON.stringify(todolist));
}

function handletodokey(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
