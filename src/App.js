import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Work from "./Pages/Work";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Business from "./Pages/Business";
import Contact from "./Pages/Contact";

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
      </Routes>
    </Router>
  );
}

export default App;
