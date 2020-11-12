import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

export function Home() {
	const [todo, setTodo] = useState(["elemento 1", "elemento 2"]);
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter" && value != "") {
			// const newTodo = todo;
			// newTodo.push(value);
			// setTodo(newTodo);
			setTodo([...todo, value]);
			console.log("handleKeyPress");
			setValue("");
		}
	};

	return (
		<div className="text-center mt-5">
			<div className="row w-100">
				<div className="col-md-12">
					<h1 className="display-2">Quehaceres:</h1>

					<div className="container form-group">
						<p>La lista es {value}</p>
						<input
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							value={value}
							placeholder="Qué tengo que hacer?"
						/>
						<ul>
							{todo.map((value, index) => (
								<li className="list-group-item" key={index}>
									{value}
								</li>
							))}
						</ul>
						<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>

							<button className="btn">
								<i className="fas fa-trash-alt" />
							</button>

							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
