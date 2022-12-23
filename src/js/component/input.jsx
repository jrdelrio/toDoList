import React from "react";

const Input = (props) => {
    return (
        <li key = '0' ><input type="text"
					onChange={(ev) => {props.setVar(ev.target.value)}}
					value={props.value}

					onKeyDown={(ev) => {
						if (ev.key === "Enter") {
							props.setToDos(props.value);
							props.setVar('')
						}}}

					placeholder="What do you need to do?"></input>
        </li>
    )
};

export default Input;








{/* <li id= 'input-field' key="input-field"><input type="text"
					onChange={(ev) => {setInputValue(ev.target.value)}}
					value={inputValue}
					onKeyDown={(ev) => {
						if (ev.key === "Enter") {
							setToDos([...toDos, inputValue]);
							setInputValue('')
						}}}
					placeholder="What do you need to do?"></input></li> */}