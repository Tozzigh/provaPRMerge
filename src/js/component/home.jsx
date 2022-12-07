import React from "react";

import Navbar from "./navbar";
import Card from "./card.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {

	return (
		<div className="text-center">
      <Navbar />
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
