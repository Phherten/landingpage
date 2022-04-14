import React from "react";
import Cervino from "../../img/cervino.jpg";
import Capitan from "../../img/capitan.jpg";
import Hielo from "../../img/hielo.jpg";
import Vignemale from "../../img/vignemale.jpg";
import Mountain from "../../img/mountain.jpg";
import { Card } from "./card.jsx";
import { NavBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="d-flex justify-content-around cartas border p-3 bg-llight">
				<Card
					img={Cervino}
					titulo="Cervino"
					texto="Escala El Cervino por la mitica arista Lion"
				/>
				<Card
					img={Vignemale}
					titulo="Glaciar Vignemale"
					texto="Travesia por el glaciar del Vignemale"
				/>
				<Card
					img={Hielo}
					titulo="Cascada de Hielo"
					texto="Escala las cascadas de hielo del circo de Gavarnie"
				/>
				<Card
					img={Capitan}
					titulo="Escala The Nose"
					texto="Escala la via mas mitica de la escalada en la pared del Capitan"
				/>
			</div>
		</div>
	);
};

export default Home;
