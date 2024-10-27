import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Work from "./Pages/Work";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Business from "./Pages/Business";
import Contact from "./Pages/Contact";
import Nature from "./gallery/Nature";
import HumanInterest from "./gallery/HumanInterest";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/nature" element={<Nature />} />
        <Route path="/work/human-interest" element={<HumanInterest />} />
      </Routes>
    </Router>
  );
}

export default App;
