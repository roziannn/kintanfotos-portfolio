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
            <div className="grid gap-4 justify-center w-full max-w-screen-xl lg:px-10">
              <div className="flex flex-col items-center">
                <img className="h-auto max-w-xs rounded-lg w-50" src="/potreed.jpg" alt="Main Image" />
                <p className="mt-4 mb-8 text-lg text-center font-normal text-gray-800 lg:text-2xl sm:px-12 lg:px-36">
                  I have a team business called <span className="font-semibold">POTREED</span>, and we are dedicated to capturing moments that matter. From graduation and events to family portraits and creative projects, we aim to create
                  stunning images that reflect your personal story
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-5">
                <div>
                  <img className="h-auto w-full rounded-lg transition-all duration-300 hover:scale-125 shadow-md" src="/gallery/graduate/1.png" alt="Gallery Image 1" />
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
              {/* <h2 class="text-4xl font-semibold text-gray-900 text-center mb-6">Business FAQ</h2>
              <Accordion collapseAll>
                <Accordion.Panel>
                  <h1></h1>
                  <Accordion.Title className="text-lg">Paket apa saja yang tersedia?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Di Potreed menawarkan berbagai paket fotografi, termasuk paket untuk acara pribadi, pre-wedding, dan sesi foto keluarga. Setiap paket dapat disesuaikan sesuai kebutuhan klien Available untuk private photoshoot
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to see
                      <a href="https://flowbite.com/docs/getting-started/introduction/" className="text-cyan-600 hover:underline dark:text-cyan-500 ml-1">
                        the package&nbsp;
                      </a>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="text-lg">How to book photoshoot session?</Accordion.Title>
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
                  <Accordion.Title className="text-lg">Apakah untuk pemotretan terbatas beberapa shoot? Berapa rata-rata hasil photoshoot yang akan saya dapat?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Jumlah gambar yang diambil tidak terbatas, namun rata-rata klien kami menerima antara 50-100 gambar hasil editan tergantung paket yang dipilih.</p>

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
              </Accordion> */}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Business;
