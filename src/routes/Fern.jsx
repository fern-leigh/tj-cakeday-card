import us from '../assets/us.gif';
import uk from '../assets/uk.gif';
import tree from '../assets/tree-and-leaf.png';
import { Link } from "react-router-dom";

import { useEffect } from "react";
import React from 'react';



export default function Fern() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="msg-container fern">
                <Link to="/message-index">
                    <p>--back to message index--</p>
                </Link>
                <h1>To TJ, <br />with lots of love, <br /> from Fern</h1>
                <div className="scroll">
                    <a href="#uk">--next--</a>
                </div>

                <div className="msg-card" id="uk">
                    <div className="msg">
                        <p>We've never had it easy in this relationship -
                            from the start we've faced me being sent to work in Glasgow, the Covid pandemic,
                            ND diagnoses that don't always play nice,
                            journeys of trauma healing and self-discovery, and gruelling visa applications.
                            But we've always stuck by each other, worked together to learn to do bettter,
                            started our little fluffy family, and had a bunch of adventures along the way! </p>
                        <div className="scroll">
                            <a href="#us">--next--</a>
                        </div>
                    </div>
                    <div >
                        <img className="illustration" src={uk} />
                    </div>
                </div>

                <div className="msg-card reverse" id="us">
                    <div className="msg">
                        <p>
                            Since coming to the US - we've faced even more challenges,
                            in the face of layoffs, the green card application, constantly changing plans,
                            financial missteps, and learning to love two troubled pups and each other the way
                            they and we need!
                        </p>
                        <div className="scroll">
                            <a href="#finale">--next--</a>
                        </div>
                    </div>
                    <div >
                        <img src={us} />
                    </div>
                </div>

                <div className="msg-card" id="finale">
                    <div className="msg">
                        <p>
                            Despite all the chaos and hardship, we come through every challenge stronger
                            and more aligned than ever. I'm super excited to find out
                            how much closer we can grow and how much fun we can have in the next stage of our
                            journey, when the pressures and challenges finally begin to subside! 
                            Happy, Happy Cakeday - my Dhaling!
                        </p>
                        <div className="scroll">
                        <a href="#top">--back to top--</a>
                    </div>
                    </div>

                    <div >
                        <img src={tree} />
                    </div>
                </div>
            </div>
        </>
    );
}