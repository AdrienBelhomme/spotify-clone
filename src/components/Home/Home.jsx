import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>Home
            <Link to="./Artists/:id">Artist</Link>
            <Link to="./Albums/:id">Albums</Link>
            <Link to="./Topcharts">Top Charts</Link>

        </div>

    );
}

export default Home;
