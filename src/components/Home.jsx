import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ color: 'white' }}>
      Home
      <Link to="./artists/:id">Artist</Link>
      <Link to="./albums/:id">Albums</Link>
      <Link to="./topcharts">Top Charts</Link>
      <Link to="./country">Top Charts by Country</Link>
    </div>
  );
};

export default Home;
