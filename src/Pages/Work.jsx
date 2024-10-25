import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import Work_Category from "../components/Work-Category";

const Work = () => {
  return (
    <>
      <section className="pt-5 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Nav />

          <Work_Category />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Work;
