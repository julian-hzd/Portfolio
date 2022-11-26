import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './routes/Navbar'
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import About from './routes/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
      </Routes>
      <Contact/>
    </>
  );
}

