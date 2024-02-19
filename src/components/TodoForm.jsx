import { useState } from "react";
import TaskHolder from "./TaskHolder";

let id = 0;
let index = 0;

function TodoForm(){
   
    let [input , setInput] = useState("");
    let [DATA] = useState([]);
    let COLORS = ["#7F96FF","#FFDBB5","#A6CFD5","#FFC6D9"]
    return(
        <div className="to-doForm">
            <div className="header">
                <h1>TO-DO LIST</h1>
            </div>
            <div className="add-todo">
                <input type="text" placeholder="What are you up to ?" onChange={
                    (e) => {
                        setInput(e.target.value);
                    }
                } />
                <button onClick={
                    (e) => {
                        let inputElem = e.target.parentNode.querySelector("input");
                        e.preventDefault();
                        if (!input){
                            alert("You must fill the field with a task !");
                            return;
                        }
                        handleClick();
                        clearInputBuffer(inputElem);
                    }
                }>Add</button>
            </div>
            <TaskHolder taskList = {DATA}/>
            
        </div>
    )

    function handleClick(){
        
        DATA.push({
            name : input,
            key : id++,
            finished : "false" ,
            color : COLORS[index++],
        })
        if (index === 4) index = 0;
    }

    

    function clearInputBuffer(inputElem){
        setInput("");
        inputElem.value = "";
        
    }
}



export default TodoForm;