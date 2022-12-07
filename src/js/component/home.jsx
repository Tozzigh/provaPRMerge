import React from "react";
import Card from "./card.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>				
		</div>
	);
};

export default Home;
