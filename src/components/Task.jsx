

function Task(props){

    let taskStyle = {
        backgroundColor : props.color , 
        borderColor : props.color
    }   
    
    return(
        <div className="task" id={props.id} isfinished = {props.isfinished} style = {taskStyle}  >
            <img src="public/img/icons8-done-50.png" alt="complete-img" onClick={(e) => handleImgChange(e.target)} />
            <h1>{props.name}</h1>
            <div className="buttons">
                <button onClick={(e) => {handleEdit(e.target)}}>Edit</button>
                <button onClick={(e) => {handleDelete(e.target)}}>Delete</button>
            </div>
        </div>  
    )
}

function handleEdit(button) {

    let editButton = button;
    let parentNode = button.parentNode.parentNode;
    let taskName = parentNode.querySelector("h1");
    let input = document.createElement("input");
    let confirmBtn = document.createElement("button");

    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click" , (e) => {
        if(!input.value){
            alert("You must fill the field !");
            return;
        }
        taskName.textContent = input.value;
        input.replaceWith(taskName);
        e.target.replaceWith(editButton);
    })
    
    taskName.replaceWith(input);
    input.focus();
    button.replaceWith(confirmBtn);
    
}
function handleDelete(task){
    let container = task.parentNode.parentNode ; 
    container.remove(task);
}

function handleImgChange(img){
     
    let container = img.parentNode;
    let state = container.getAttribute("isfinished");
    if (!!state){
        img.src = "public/img/icons8-completed-50.png";
        img.parentNode.querySelector("h1").classList.toggle("done");
        container.setAttribute("isfinished" , "true");

    }

    if(state === "true"){
        img.src = "public/img/icons8-done-50.png";
        img.parentNode.querySelector("h1").classList.remove("done");
        container.setAttribute("isfinished" , "false");
    }

    
}

export default Task;