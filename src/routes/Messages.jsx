import { Link } from 'react-router-dom';

export default function Messages() {
    return (
        <>
            <div>
                <h1>Select who's message you would like to read</h1>
            </div>
            <Link to='/basil-message'>
            <div className="basil">
                <h2>Basily-pup!</h2>
                </div>
            </Link>
            <Link to='/lily-message'>
            <div className="lily">
                <h2>Lily-bean!</h2>
                </div>
            </Link>
            <Link to='/fern-message'>
            <div className="fern">
                <h2>The marvelous and amazing Fern!</h2>
                </div>
            </Link>
        </>
    );
}