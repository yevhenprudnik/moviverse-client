import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import MoviePage from './Components/MoviePage';
import CollectionPage from './Components/CollectionPage';
import Profile from './Components/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/movie" element={<MoviePage />} />
          <Route exact path="/collection" element={<CollectionPage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
