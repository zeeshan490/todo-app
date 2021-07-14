let addTodoButton = document.querySelector(".add-todo");
//selected this button with the selector
let todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".input-container");


todoInput.addEventListener("keypress", function(e){
    if(e.key=="Enter"){
        addTodo();
    }
});
addTodoButton.addEventListener("click", function(){
    addTodo();
});

function addTodo(){
    let todoInputvalue = todoInput.value;
    if(todoInputvalue){
        appendTodo(todoInputvalue);
        todoInput.value ="";
    }
}

function appendTodo(todo){
    let todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    //created <div class="todo-item"></div>

    let pTag = document.createElement("p");
    pTag.classList.add("todo-input");
    pTag.textContent = todo;
    // <p class= "todo-input"> text from typing</p>

    let deleteTodoButton = document.createElement("button");
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent="Delete";

    deleteTodoButton.addEventListener("click",deleteTodo);

    todoItemDiv.append(pTag);
    todoItemDiv.append(deleteTodoButton);
    //it will make p and delete the child of main div todoItemDiv

    todoList.append(todoItemDiv);

}

function deleteTodo(e){
    e.target.parentNode.remove();
}






 
// function addTodo(e){         //this fn will get called every time click event executed
//     let todoInputvalue = todoInput.value;   //get the input from .value

//     if(todoInputvalue){    //only when input is non empty
//         console.log(todoInputvalue);

//         todoInput.value =""; //it will empty the todo input
//     }
// }

//this will attach event on addtodobutton 
// click is inbuild keyword we cant change it , ther r many like it

