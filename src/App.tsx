import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PracticeAreas } from './pages/PracticeAreas';
import { Acts } from './pages/Acts';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Admin } from './pages/Admin';
import { ScrollToTop } from './components/ScrollToTop';
import ASMRStaticBackground from './components/ui/asmr-background';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ASMRStaticBackground />
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/acts" element={<Acts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
