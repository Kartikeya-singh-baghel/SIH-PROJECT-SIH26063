import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ❄ POLARIS
      </div>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/repository">Repository</NavLink>
        <NavLink to="/map">Polar Map</NavLink>
        <NavLink to="/media">Media & Outreach</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;