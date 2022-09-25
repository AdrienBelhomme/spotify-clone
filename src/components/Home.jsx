import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <Link to="./Artists/:id">Artist</Link>
      <Link to="./Albums/:id">Albums</Link>
      <Link to="./Topcharts">Top Charts</Link>
    </div>
  );
};

export default Home;
