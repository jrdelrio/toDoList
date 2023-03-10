import React from "react";

const Task = (props) => {
    return(
        <li className="displayedTask">
            {props.task} 
            <i className="fa-regular fa-trash-can" onClick={()=>props.remove(props.task)}></i>
        </li>
    )
};

export default Task

