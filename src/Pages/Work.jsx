import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import Work_Category from "../components/Work-Category";

const Work = () => {
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />

        <Work_Category />
      </div>
      <Footer />
    </>
  );
};

export default Work;
