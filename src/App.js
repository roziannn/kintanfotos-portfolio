import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tagline_1 from "./components/Tagline-1";
import HireMe from "./components/HireMe";
import HomeFeeds from "./components/HomeFeed";
import Instagram from "./components/Instagram";
import Services from "./components/MyService";

function App() {
  return (
    <section className="pt-5">
      <div className="container max-w-screen-xl mx-auto px-4">
        <Navbar />
        <Hero />
        <Tagline_1 />
        <HomeFeeds />
        <Services />
      </div>
      <HireMe />
      <Instagram />
      <Footer />
    </section>
  );
}

export default App;
