import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import TalentUpload from './pages/TalentUpload';
import TalentDirectory from './pages/TalentDirectory';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<TalentUpload />} />
        <Route path="/directory" element={<TalentDirectory />} />
      </Routes>
    </Router>
  );
}

export default App;
