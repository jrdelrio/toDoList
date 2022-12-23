import React, { useState } from "react";
import Task from "./task.jsx"
import Input from "./input.jsx";

//create your first component
const Home = () => {

	//my states
	const [ inputValue, setInputValue ] = useState('');
	const [ toDos, setToDos ] = useState([]);


	const setInputValueFunction = (arg) => {setInputValue(arg)};
	const setToDosFunction = (arg) => {setToDos([...toDos, arg])};
	
	// const removeTask = (list, itemToRemove) => {
	// 	let result = list.filter(task => task !== itemToRemove);
	// };

	return (
			<div className="container">
				<h1>To Do List</h1>
				<Input value = {inputValue} 
					setVar = {setInputValueFunction}
					setToDos = {setToDosFunction}
					toDos = {toDos}
					/>
				<ul>
					{toDos.map((task, index) => {
						return(
							<Task key={index} task={task} /> 
						)
					})}
						

				</ul>
				<div className="total-tasks">{toDos.lenght === 0 ? 0 : toDos.length} Tasks</div>
			</div>
	);
};

export default Home;
