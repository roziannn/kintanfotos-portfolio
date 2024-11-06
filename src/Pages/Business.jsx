import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion, Button } from "flowbite-react";

const Business = () => {
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />
        <div className="mx-auto mb-28 flex">
          <div className="grid gap-4 justify-center w-full max-w-screen-xl lg:px-10">
            <div className="flex flex-col items-center">
              <img className="h-auto max-w-xs rounded-lg w-50" src="/potreed.jpg" alt="Main Image" />
              <p className="my-12 text-lg text-center font-normal text-gray-800 lg:text-xl sm:px-12 lg:px-36">
                I have a team business called <span className="font-semibold">POTREED</span>, and we are dedicated to capturing moments that matter. From the pride of graduation to intimate private sessions, our team is dedicated to
                creating beautiful images that reflect your unique journey. <br /> Let us help you tell your story through images that you’ll cherish forever ✨
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5">
              <div>
                <img className="h-auto w-full rounded-lg transition-all duration-300 hover:scale-125 shadow-md" src="/graduate-0.png" alt="Gallery Image 1" />
              </div>
              <div>
                <img className="h-auto w-full rounded-lg transition-all duration-300 hover:scale-125 shadow-md" src="/graduate-2.png" alt="Gallery Image 2" />
              </div>
              <div>
                <img className="h-auto w-full rounded-lg transition-all duration-300 hover:scale-125 shadow-md" src="/graduate-1.png" alt="Gallery Image 3" />
              </div>
              <div>
                <img className="h-auto w-full rounded-lg transition-all duration-300 hover:scale-125 shadow-md" src="/graduate-3.png" alt="Gallery Image 4" />
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mt-12 mb-16 lg:mb-20">
              <Button
                href="https://drive.google.com/drive/u/0/folders/1B7MdRYXkIogTyetikTH9WuuHvOkcOb5O"
                target="_blank"
                color="lime"
                className="animate-bounce border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-white transition-all duration-300 rounded-lg"
              >
                <div className="flex text-2xl justify-center items-center">
                  EXPLORE PACKAGES HERE
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Business;
