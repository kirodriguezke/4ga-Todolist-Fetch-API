import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

export function Home() {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter" && inputValue != "") {
			setTodo([...todo, inputValue]);
			console.log("handleKeyPress");
			setInputValue("");
		}
	};

	function deleteRow(index, event) {
		let newTodo = [...todo];
		let removed = newTodo.splice(index, 1);
		setTodo(newTodo);
    }
    /*function getTODO(){

    }*/

	return (
		<div className="text-center mt-5">
			<div className="row w-100">
				<div className="col-md-12">
					<h1 className="display-2">Tareas para hacer:</h1>

					<div className="input container input-group mt-5">
						<input
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							value={inputValue}
							placeholder="¿Qué tengo que hacer hoy?"
							type="text"
							className="form-control w-100"
						/>
					</div>
					<div className="list container">
						<ul>
							{todo.map((value, index) => (
								<li
									className="list-group-item font-weight-bold"
									key={index}>
									{value}

									<button
										type="button"
										onClick={event =>
											deleteRow(index, event)
										}>
										<i className="fas fa-trash-alt" />
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
