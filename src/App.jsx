import './App.css';
import 'aos/dist/aos.css';
import CustomNavbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Service from './pages/service/Service';
import Footer from './components/footer/Footer';
import AboutUS from './pages/aboutus/AboutUS';
import Features from './pages/features/Features';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import Career from './pages/career/Career';
import Faq from './pages/faq/Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/About" element={<AboutUS />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
