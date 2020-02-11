import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [contenido, setContenido] = useState();
	const [display, setDisplay] = useState();

	function click(e) {
		setContenido(e.target.value);
	}
	return (
		<div className="text-center mt-5">
			<input onChange={e => click(e)} />
			<br />
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => setDisplay(contenido)}>
				Primary
			</button>

			<h1>{contenido}</h1>
			<h1>{display}</h1>
		</div>
	);
}
