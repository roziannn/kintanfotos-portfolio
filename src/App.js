import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Tagline_1 from "./components/Tagline-1";
import HireMe from "./components/HireMe";
import HomeFeeds from "./components/HomeFeed";
import Instagram from "./components/Instagram";
import Services from "./components/MyService";
import Work from "./Pages/Work";
import Home from "./Pages/Home";

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
      </Routes>
    </Router>
  );
}

export default App;
