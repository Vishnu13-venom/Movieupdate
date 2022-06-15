import {
  Routes,
  Route,
} from "react-router-dom";
import { Watched } from "./components/Watched";
import Add from "./components/Add";
import './App.css';
import './styles/login.css';
import Login from './components/Login';
import { Home } from './components/Home';
import Register from "./components/Register";
import RouteGuard from "./components/RouteGuard";
import { WatchList } from "./components/Watchlist";
import CreateWatchlist from "./components/CreateWatchlist";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Home" element={<RouteGuard><Home /></RouteGuard>} />
      <Route exact path="/Watchlist/:id" element={<RouteGuard><WatchList /></RouteGuard>} />
      <Route exact path="/CreateWatchlist" element={<RouteGuard><CreateWatchlist /></RouteGuard>} />
      <Route exact path="/Watched" element={<RouteGuard><Watched /></RouteGuard>} />
      <Route exact path="/Add/:id" element={<RouteGuard><Add /></RouteGuard>} />
    </Routes>
  );
}

export default App;
