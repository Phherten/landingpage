import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron d-flex flex-column justify-content-center">
			<h1 className="display-4 ps-5">Vive tu Aventura</h1>

			<p className="lead ps-5">
				Tú eliges tu aventura y nosotros la hacemos realidad.
			</p>

			<p className="ps-5 descripcion">
				Disfrutar de aventuras exclusivas e inolvidables de manos de los
				mejores profesionales, está en tu mano. Si quieres romper con la
				rutina, hacer algo único aunque no tengas experiencia previa,
				sentirte seguro y conocer un lugar maravilloso, esta es tu mejor
				opción.
			</p>

			<a
				className="btn btn-secondary btn-lg ms-5 mt-5"
				href="#"
				role="button"
				id="boton">
				Mas Información
			</a>
		</div>
	);
}
