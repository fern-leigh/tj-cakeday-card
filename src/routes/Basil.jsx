import kindness from "../assets/kindness-and-patience.jpg";
import adventures from "../assets/adventures.jpg";
import toys from "../assets/toys-and-trash.jpg";
import snow from "../assets/snow-dog.jpg";
import frisbee from "../assets/frisbee-dog.mp4";
export default function Basil() {
    return (
        <>
            <div className="basil-container">
            <h1>To Daddy, Woof from Basil</h1>
            <div className="msg-card">
                <div className="msg">
                    <p>Thank you for working hard to learn to be kind and patient
                        with me, so I can be happy and calm! I know it's not always easy
                        when silly things make me scared or when my
                        stinkiness is overwhelmingly glorious! </p>
                </div>
                <div className="illustration">
                    <img src={kindness} />
                </div>
            </div>

            <div className="msg-card reverse">
                <div className="msg">
                    <p>Thank you for taking me on lots of awesome adventures,
                        showing me new things, and helping me not be too scared!</p>
                </div>
                <div>
                    <img src={adventures} />
                </div>
            </div>

            <div className="msg-card">
                <div className="msg">
                    <p>Thank you for giving me pretty cool toys and TOTALLY AMAZING trash!!</p>
                </div>
                <div>
                    <img src={toys} />
                </div>
            </div>
            <div className="msg-card reverse">
            <div className="msg">
                <p>And thank you for buying me this awesome house
                    so I can play in all the snow.
                    I know you must'a got it for me,
                    cause Lily is too much of a wimp to go out in the cold.
                </p>
            </div>
            <div>
                <img src={snow} />
            </div>
            </div>
            <div className="video-container">
                <div>
                <p>I woof you, Daddy dog! You're totally paw-some!</p>
                </div>
                <video src={frisbee} controls />
            </div>
            </div>
        </>
    );
}