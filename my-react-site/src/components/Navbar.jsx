import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Cindy Zhu</h2>
            <div className="nav-links">
                <Link to="/Engineering-Portfolio/position-statement">Position Statement</Link>
                <Link to="/Engineering-Portfolio/esc101">ESC101 Backpacks</Link>
                <Link to="/Engineering-Portfolio/civ102">CIV102 Bridge Project</Link>
                <Link to="/Engineering-Portfolio/uoft-hacks">UofT Hacks Robot Lamp</Link>
                <Link to="/Engineering-Portfolio/esc102">ESC102 Designing for Astronomers</Link>
                <Link to="/Engineering-Portfolio/contact">Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;