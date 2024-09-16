import { Link } from 'react-router-dom';
import lilypad from '../assets/lilypad.jpg'
import belly from '../assets/belly-scratches.jpg'
import me from '../assets/look-down.jpg'

export default function Messages() {
    return (
        <>
            <header>
                <h1>Select who's message you would like to read</h1>
            </header>

            <div  className='routes-container'>
            <Link to='/basil-message'>
                <div className="index-card basil">
                    <img src={belly} />
                    <h2>Basily-pup!</h2>
                </div>
            </Link>
            <Link to='/lily-message'>
                <div className="index-card lily">
                    <img src={lilypad} />
                    <h2>Lily-bean!</h2>
                </div>
            </Link>
            <Link to='/fern-message'>
                <div className="index-card fern">
                    <img src={me} />
                    <h2>Fern Leigh!</h2>
                </div>
            </Link>
            </div>
        <div className='close'>
            <Link to='/'>
            <button>
                close card
            </button>
            </Link>
            </div>
        </>
    );
}