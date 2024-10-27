import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <section className="pt-5 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Nav />
          <div className="mx-auto flex flex-col justify-center md:mt-0 mb-28">
            <div className="flex md:flex-row justify-between items-center">
              <div className="text-content flex-1 px-4 md:pr-5 text-lg text-black order-2 md:order-1">
                <h1 className="text-4xl lg:text-5xl font-semibold mb-6">CONTACT ME</h1>
                <p className="mb-6 text-2xl">For photography inquiries, contact me by email or instagram.</p>
                <h1 className="text-xl mb-2">
                  Mail to: <span className="font-bold">kintania@business.com</span>
                </h1>
                <h1 className="text-xl">Instagram: @kintania_marsha</h1>
                <br />
                <h1 className="text-xl">
                  <i className="fa-brands fa-youtube"> </i> Putu Kintan
                </h1>
                <br />
                <hr />
                <br />
                <span className="text-xl font-semibold mt-5">Let’s create something together!</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default Contact;
