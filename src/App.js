import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Work from "./Pages/Work";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Business from "./Pages/Business";
import Contact from "./Pages/Contact";
import Nature from "./gallery/Nature";
import HumanInterest from "./gallery/HumanInterest";
import Event from "./gallery/Event";
import Animal from "./gallery/Animal";
import Graduation from "./gallery/Graduation";
import StillLife from "./gallery/StillLife";
import Food from "./gallery/Food";
import Product from "./gallery/Product";
import Videograph from "./gallery/Videograph";

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
        <Route path="/work/product" element={<Product />} />
        <Route path="/work/human-interest" element={<HumanInterest />} />
        <Route path="/work/event" element={<Event />} />
        <Route path="/work/animal" element={<Animal />} />
        <Route path="/work/graduation" element={<Graduation />} />
        <Route path="/work/still-life" element={<StillLife />} />
        <Route path="/work/videograph" element={<Videograph />} />
        <Route path="/work/food" element={<Food />} />
      </Routes>
    </Router>
  );
}

export default App;
