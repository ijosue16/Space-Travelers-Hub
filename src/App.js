import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './components/missions';
import MyProfile from './components/myprofile';
import Rockets from './pages/rocketlist';
import NavBar from './components/Navbar/navbar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
