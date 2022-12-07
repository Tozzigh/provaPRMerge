import React from "react";

const Card = () => {
	return (
        <div className="col">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1TtAX4xVxXCTeAQ50VVYgp-Pb3XNeBluGg&usqp=CAU" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
	);
};

export default Card;
