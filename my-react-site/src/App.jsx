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
                <Route path="/Engineering-Portfolio/" element={<Home />} />
                <Route path="/position-statement" element={<PositionStatement />} />
                <Route path="/esc101" element={<ESC101 />} />
                <Route path="/civ102" element={<CIV102 />} />
                <Route path="/uoft-hacks" element={<UofTHacks />} />
                <Route path="/esc102" element={<ESC102 />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;