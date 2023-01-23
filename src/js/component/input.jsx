import React from "react";

const Input = (props) => {
    return (
        <input id='input-field' type="text"
					onChange={(ev) => {props.setVar(ev.target.value)}}
					value={props.value}

					onKeyDown={(ev) => {
						if (ev.key === "Enter") {
							props.setToDos(props.value);
							props.setVar('')
						}}}

					placeholder="What do you need to do?"></input>
    )
};

export default Input;
