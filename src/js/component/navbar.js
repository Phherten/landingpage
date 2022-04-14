import React from "react";

export function NavBar() {
	return (
		<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-5">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					Aventuras
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a
								class="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#cartas">
								Actividades
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Precios
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
