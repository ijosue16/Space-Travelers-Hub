import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import NavBar from './components/Navbar/navbar';
import Missions from './components/missions';
import MyProfile from './components/myprofile';

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
