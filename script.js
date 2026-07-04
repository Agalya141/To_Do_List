let TaskInput = document.getElementById("task-input")
let AddBtn = document.getElementById("add-btn")
let todolist = document.getElementById("todolist")
AddBtn.addEventListener("click", function(){
    todolist.innerHTML += `<li>${TaskInput.value=" "}</li>`

})