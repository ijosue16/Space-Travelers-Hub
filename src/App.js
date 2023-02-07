import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from './components/myprofile';
import Rockets from './pages/rocketlist';
import NavBar from './components/Navbar/navbar';
import store from './redux/configurestore';
import Missions from './pages/missionslist';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/Myprofile" element={<MyProfile />} />
          </Routes>
        </Router>
      </Provider>
    </>

  );
}

export default App;
