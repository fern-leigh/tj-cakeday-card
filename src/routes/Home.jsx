import hiking from "../assets/hiking2.png";
import campsite from "../assets/campsite.png";
import { Link } from 'react-router-dom';
import React from 'react';



const Home = () => {
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <h1>Happy Cakeday, TJ!!</h1>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={campsite} alt="vintage camper and bell tent in forest clearing" />
                    </div>

                    <Link to='/message-index'>
                        <button type="button">Open Card</button>
                    </Link>

                    <div className="image image2">
                        <img src={hiking} alt="woman and dog backpacking in the mountains" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;