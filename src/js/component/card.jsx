import React from "react";

export function Card(props) {
	return (
		<div className="card mt-5 mb-5" id="cartas" style={{ width: "18rem" }}>
			<img src={props.img} className="card-img-top foto" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.texto}</p>
				<a href="#" className="btn btn-secondary">
					Ir a la aventura
				</a>
			</div>
		</div>
	);
}
