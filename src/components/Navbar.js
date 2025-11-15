import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TalentHub</div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload Talent</Link></li>
        <li><Link to="/directory">Talent Directory</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
