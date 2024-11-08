import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import Tagline_1 from "../components/Tagline-1";
import HireMe from "../components/HireMe";
import HomeFeeds from "../components/HomeFeed";
import Instagram from "../components/Instagram";
import Services from "../components/MyService";

const Home = () => {
  return (
    <>
      <div className="container pt-5 max-w-screen-xl mx-auto px-4">
        <Nav />
        <Hero />
        <Tagline_1 />
        <HomeFeeds />
        <Services />
      </div>
      <HireMe />
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
