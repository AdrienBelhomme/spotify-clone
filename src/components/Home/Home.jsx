import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>Home
            <Link to="./Artists/">Artist</Link>
            <Link to="./Albums/">Albums</Link>

        </div>

    );
}

export default Home;
