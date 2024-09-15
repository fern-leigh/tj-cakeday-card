import hiking from "../assets/hiking2.png"
import campsite from "../assets/campsite.png"



<assets></assets>

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <div className="header">
                <h1>Happy Cakeday, TJ!!</h1>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={campsite} alt="vintage camper and bell ten in forest clearing" />
                    </div>
                    <div>
                    <button>Open Card</button>
                    </div>
                    <div className="image image2">
                        <img src={hiking} alt="woman and dog backpacking in the mountains" />
                    </div>
                </div>
            </div>

        </>
    );
}