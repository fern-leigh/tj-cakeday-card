import blanket from "../assets/blanket.jpg";
import wet from "../assets/wet-lily.jpg";
import ball from "../assets/ball.jpg";
import teeth from "../assets/snow-teeth.jpg";
import running from "../assets/running.jpg";
import flip from "../assets/flip.mp4";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Lily() {
    useEffect(() => {
        window.scrollTo(0,0); 
    });

    return (
        <>
            <div className="msg-container lily">
                <Link to="/message-index">
                    <p>--back to message index--</p>
                </Link>
                <h1>Daaaaddddyyy!!! <br/>
                with licks and wiggles, from Lily
                </h1>
                <div className="scroll">
                    <a href="#blanket">--next--</a>
                </div>

                <div className="msg-card lily" id="blanket">
                    <div className="msg">
                        <p>I love yooou! </p>
                        <div className="scroll">
                            <a href="#wet">--next--</a>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={blanket} />
                    </div>
                </div>

                <div className="msg-card reverse lily" id="wet">
                    <div className="msg">
                        <p>I loooove you!!</p>
                        <div className="scroll">
                            <a href="#ball">--next--</a>
                        </div>
                    </div>
                    <div>
                        <img src={wet} />
                    </div>
                </div>

                <div className="msg-card lily" id="ball">
                    <div className="msg">
                        <p>I love ball!! ... ball, ball, ball!! oh and I love you!!</p>
                        <div className="scroll">
                            <a href="#snow-teeth">--next--</a>
                        </div>
                    </div>
                    <div>
                        <img src={ball} />
                    </div>
                </div>

                <div className="msg-card reverse lily" id="snow-teeth">
                    <div className="msg">
                        <p>I love aawoooo!!
                        </p>
                        <div className="scroll">
                            <a href="#running">--next--</a>
                        </div>
                    </div>
                    <div>
                        <img src={teeth} />
                    </div>
                </div>

                <div className="msg-card lily" id="running">
                    <div className="msg">
                        <p>I love runnning!! Zooooom!!</p>
                        <div className="scroll">
                            <a href="#vid">--next--</a>
                        </div>
                    </div>
                    <div>
                        <img src={running} />
                    </div>
                </div>

                <div className="video-container" id="vid">
                    <div>
                        <p>You make me this excited!! I loooovveee Yoooou!!</p>
                    </div>
                    <div className="vid">
                    <video src={flip} controls />
                    </div>
                    <div className="scroll">
                   <a href="#top"> --back to top-- </a>
                    </div>
                </div>

            </div>
        </>
    );
}