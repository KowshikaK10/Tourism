import './Components/css/App.css';
import NavBar from './Components/Homepagejs/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import PlacesToVisit from './PlacesToVisit';





function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Places" element={<PlacesToVisit/>} />
      </Routes>
    </div>
  );
}

export default App;
