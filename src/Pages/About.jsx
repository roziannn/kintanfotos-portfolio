import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />
        <div className="mx-auto flex flex-col justify-center md:mt-0 mb-28">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="image-content flex-1 flex justify-center mb-8 md:mb-0 order-1 md:order-2 ">
              <figure className="relative w-11/12 max-w-[600px] z-0 rounded-lg transition-all duration-300 hover:scale-110">
                <img src="../memotret.jpeg" alt="About Me Img" className="w-full h-full max-h-[70vh] object-cover rounded-lg" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-6 text-white rounded-lg">
                  <div className="flex justify-between items-center bg-white/50 text-black p-4 rounded-lg backdrop-blur-sm">
                    <div>
                      <h5 className="text-sm lg:text-lg font-semibold">Bedugul, Bali</h5>
                      <p className="text-xs lg:text-sm">March 2023</p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="text-content flex-1 px-4 md:pr-5 text-lg text-black order-2 md:order-1">
              <h1 className="text-4xl lg:text-5xl font-semibold mb-6">Capturing moments that bring joy to others is what brings me the most happiness.</h1>
              <p className="mb-6 text-justify">
                — Hi! my name is Kintan, a photographer based in Karawang. My goal is to help my clients express themselves naturally, uncover their true beauty, and capture those moments through my lens. I’m always open to creative ideas
                and make sure my clients feel confident, comfortable, and in control. Whether it's digital or film, I aim to deliver images that reflect your unique story.
              </p>
              <span className="text-xl font-semibold">Let’s create something together!</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
