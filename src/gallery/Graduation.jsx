import Nav from "../components/Navbar";
import Footer from "../components/Footer";

import { Breadcrumb, Button } from "flowbite-react";

const Item = ({ imageSrc }) => {
  return (
    <div class="mb-8">
      <img class="h-auto max-w-full rounded-lg" src={imageSrc} alt="Gallery image" loading="lazy" />
    </div>
  );
};

const Graduation = () => {
  const items = [
    { imageSrc: "/gallery/graduate/1.png" },
    { imageSrc: "/gallery/graduate/2.png" },
    { imageSrc: "/gallery/graduate/3.png" },

    { imageSrc: "/gallery/graduate/4.png" },
    { imageSrc: "/gallery/graduate/5.png" },
    { imageSrc: "/gallery/graduate/6.png" },

    { imageSrc: "/gallery/graduate/9.png" },
    { imageSrc: "/gallery/graduate/25.png" },
    { imageSrc: "/gallery/graduate/11.png" },

    { imageSrc: "/gallery/graduate/12.png" },
    { imageSrc: "/gallery/graduate/13.png" },
    { imageSrc: "/gallery/graduate/14.png" },

    { imageSrc: "/gallery/graduate/15.png" },
    { imageSrc: "/gallery/graduate/16.png" },
    { imageSrc: "/gallery/graduate/17.png" },

    { imageSrc: "/gallery/graduate/18.png" },
    { imageSrc: "/gallery/graduate/19.png" },
    { imageSrc: "/gallery/graduate/20.png" },

    { imageSrc: "/gallery/graduate/21.png" },
    { imageSrc: "/gallery/graduate/23.png" },
    { imageSrc: "/gallery/graduate/22.png" },

    { imageSrc: "/gallery/graduate/28.png" },
    { imageSrc: "/gallery/graduate/29.png" },
    { imageSrc: "/gallery/graduate/27.png" },

    { imageSrc: "/gallery/graduate/34.png" },
    { imageSrc: "/gallery/graduate/7.png" },
    { imageSrc: "/gallery/graduate/8.png" },
  ];
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />
        <div className="items-center flex flex-col gap-6 mb-16 text-6xl font-semibold">
          <Breadcrumb aria-label="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/work">Work Gallery</Breadcrumb.Item>
            <Breadcrumb.Item>Graduation</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl mb-4">Graduation</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((item, index) => (
              <Item key={index} imageSrc={item.imageSrc} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5 mb-24">
          <Button href="/work/animal" size="lg" color="lime">
            <svg class="w-6 h-6 mr-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
            Animal
          </Button>
          <Button href="/work/still-life" size="lg" color="lime">
            Still Life{" "}
            <svg class="w-6 h-6 ml-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Graduation;
