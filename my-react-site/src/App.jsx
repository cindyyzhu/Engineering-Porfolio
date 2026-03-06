import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PositionStatement from "./pages/PositionStatement";
import ESC101 from "./pages/ESC101";
import CIV102 from "./pages/CIV102";
import UofTHacks from "./pages/UofTHacks";
import ESC102 from "./pages/ESC102";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Engineering-Portfolio/position-statement" element={<PositionStatement />} />
                <Route path="/Engineering-Portfolio/esc101" element={<ESC101 />} />
                <Route path="/Engineering-Portfolio/civ102" element={<CIV102 />} />
                <Route path="/Engineering-Portfolio/uoft-hacks" element={<UofTHacks />} />
                <Route path="/Engineering-Portfolio/esc102" element={<ESC102 />} />
                <Route path="/Engineering-Portfolio/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;