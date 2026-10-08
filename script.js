const todolist = [];

function renderTodolist() {
    let todolistHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        html = `<p>${todo}</p>
        <button onclik="todolist.splice(${i},1);
        renderTodolist">DELETE</button>
        `;
        todolistHTML += html;

    }
    document.querySelector('.result').innerHTML = todolistHTML;
}

function addTodo() {
    const inputElement = document.querySelector('#task-input');
    const name = inputElement.value;
    todolist.push(name);
    inputElement.value = '';
    renderTodolist();
    console.log('added')
}

function handletodokey(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}