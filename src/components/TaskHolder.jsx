
import Task from "./Task";

function TaskHolder(props){
    const taskList = props.taskList?.map((elem) => 
        <Task 
        name = {elem.name} 
        key = {elem.key} 
        id ={elem.key} 
        isfinished = {elem.finished} 
        color = {elem.color}
        />
    );
    return(
        <div className="task-holder">
           {taskList}
        </div>     
    )
}


export default TaskHolder;