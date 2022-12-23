import React from "react";

const Task = (props) => {
    return(
        <li>
            {props.task} 
            <button>buton</button>
        </li>
    )
};

export default Task