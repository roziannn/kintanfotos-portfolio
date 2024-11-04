import Nav from "../components/Navbar";
import Footer from "../components/Footer";

import { Breadcrumb } from "flowbite-react";

const Item = ({ imageSrc }) => {
  return (
    <div class=" break-inside-avoid mb-8">
      <img class="h-auto max-w-full rounded-lg" src={imageSrc} alt="Gallery image" />
    </div>
  );
};

const Nature = () => {
  const items = [
    { imageSrc: "/gallery/nature/1.jpg" },
    { imageSrc: "/gallery/nature/2.jpg" },
    { imageSrc: "/gallery/nature/3.jpg" },
    { imageSrc: "/gallery/nature/4.jpg" },
    { imageSrc: "/gallery/nature/5.jpg" },
    { imageSrc: "/gallery/nature/6.jpg" },
    { imageSrc: "/gallery/nature/7.jpg" },
    { imageSrc: "/gallery/nature/8.jpg" },
    { imageSrc: "/gallery/nature/9.jpg" },
    { imageSrc: "/gallery/nature/10.jpg" },
    { imageSrc: "/gallery/nature/11.jpg" },
    { imageSrc: "/gallery/nature/12.jpg" },
    { imageSrc: "/gallery/nature/13.jpg" },
    { imageSrc: "/gallery/nature/17.png" },
    { imageSrc: "/gallery/nature/14.jpg" },
    { imageSrc: "/gallery/nature/16.png" },
    { imageSrc: "/gallery/nature/20.png" },
    { imageSrc: "/gallery/nature/18.png" },
    { imageSrc: "/gallery/nature/15.jpg" },
    { imageSrc: "/gallery/nature/19.png" },
    { imageSrc: "/gallery/nature/21.png" },
    { imageSrc: "/gallery/nature/22.png" },
    { imageSrc: "/gallery/nature/23.png" },
    { imageSrc: "/gallery/nature/24.png" },
  ];
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />
        <div className="items-center flex flex-col gap-8 mb-28 text-6xl font-semibold">
          <Breadcrumb aria-label="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/work">Work Gallery</Breadcrumb.Item>
            <Breadcrumb.Item>Nature</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl mb-4">Nature</h1>
          <div class="columns-1 md:columns-2 xl:columns-3 gap-7 ">
            {items.map((item, index) => (
              <Item key={index} imageSrc={item.imageSrc} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nature;
