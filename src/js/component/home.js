import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [hacer, setHacer] = useState(["Element 1", "Element 2"]);
	const [value, setValue] = useState("");

	return (
		<div className="container">
			<h1>Quehaceres:</h1>
			<p>
				Mi valor es: &nbsp;
				{value}
			</p>
			<input
				onChange={event => {
					setValue(event.target.value);
				}}
				onKeyPress={event => (key === "Enter" ? <p>{value}</p> : " ")}
			/>
		</div>
	);
}
