import './App.css';
import Particles from './components/Particles';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Particles id="tsparticles" />
      <Footer />
    </div>
  );
}

export default App;
