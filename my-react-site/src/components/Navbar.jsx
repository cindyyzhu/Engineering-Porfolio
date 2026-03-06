import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Cindy Zhu</h2>
            <div className="nav-links">
                <Link to="/position-statement">Position Statement</Link>
                <Link to="/esc101">ESC101 Backpacks</Link>
                <Link to="/civ102">CIV102 Bridge Project</Link>
                <Link to="/uoft-hacks">UofT Hacks Robot Lamp</Link>
                <Link to="/esc102">ESC102 Designing for Astronomers</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;