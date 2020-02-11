import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [contenido, setContenido] = useState();
	const [list, setList] = useState([]);

	return (
		<div className="text-center mt-5">
			<input
				value={contenido}
				onChange={e => setContenido(e.target.value)}
				onKeyPress={e => {
					if (e.key === "Enter") {
						setList(list.concat(contenido));
						setContenido("");
					}
				}}
			/>

			{list.map((item, index) => {
				return <div key={index}>{item}</div>;
			})}
		</div>
	);
}
