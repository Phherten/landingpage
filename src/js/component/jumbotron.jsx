import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4 ps-5 pt-5 align-middle">
				Vive tu Aventura
			</h1>
			<p className="lead ps-5">
				Tú eliges tu aventura y nosotros la hacemos realidad.
			</p>

			<p className="ps-5">
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-secondary btn-lg ms-5" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
