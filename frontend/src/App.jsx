import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
