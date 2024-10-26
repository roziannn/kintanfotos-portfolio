import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion, Button } from "flowbite-react";

const Business = () => {
  return (
    <>
      <section className="pt-5 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Nav />
          <div className="mx-auto mb-28 flex">
            <div className="grid gap-4 justify-center w-full max-w-screen-xl px-24">
              <div className="flex flex-col items-center">
                <img className="h-auto max-w-sm rounded-lg" src="/potreed.jpg" alt="Main Image" />
                <p className="mt-4 mb-8 text-lg text-center font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-40">
                  I have a team business called <span className="font-bold">POTREED</span>, and we are dedicated to capturing moments that matter. From graduation and events to family portraits and creative projects, we aim to create
                  stunning images that reflect your personal story
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5">
                <div>
                  <img className="h-auto w-full rounded-lg" src="/gallery/graduate/1.png" alt="Gallery Image 1" />
                </div>
                <div>
                  <img className="h-auto w-full rounded-lg" src="/gallery/graduate/1.png" alt="Gallery Image 2" />
                </div>
                <div>
                  <img className="h-auto w-full rounded-lg" src="/gallery/graduate/1.png" alt="Gallery Image 3" />
                </div>
                <div>
                  <img className="h-auto w-full rounded-lg" src="/gallery/graduate/1.png" alt="Gallery Image 4" />
                </div>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 my-12">
                <Button outline gradientDuoTone="greenToBlue" className="animate-bounce ">
                  <div className="flex text-2xl justify-center items-center">
                    EXPLORE PACKAGES HERE
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </div>
                </Button>
              </div>
              <Accordion collapseAll>
                <Accordion.Panel>
                  <Accordion.Title>What is Flowbite?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to&nbsp;
                      <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        get started&nbsp;
                      </a>
                      and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the
                      <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Figma design system
                      </a>
                      based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                      components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                      <li>
                        <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a href="https://tailwindui.com/" rel="nofollow" className="text-cyan-600 hover:underline dark:text-cyan-500">
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Business;
