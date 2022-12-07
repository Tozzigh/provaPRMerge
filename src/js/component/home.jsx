import React from "react";
import Footer from "./footer.js";
import Jumbotrom from "./jumbotron.jsx";

import Navbar from "./navbar.jsx";
import Card from "./card.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	return (
		<div className="text-center h-100">
      <Navbar />
      <Jumbotrom />
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>				
      <Footer/>
		</div>
	);
};

export default Home;
