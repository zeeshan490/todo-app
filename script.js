let addTodoButton = document.querySelector(".add-todo");
//selected this button with the selector
let todoInput = document.querySelector(".todo-input");


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
        console.log(todoInputvalue);
        todoInput.value ="";
    }
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

