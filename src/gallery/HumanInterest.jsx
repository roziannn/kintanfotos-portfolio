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
  const items = [{ imageSrc: "/gallery/human/1.png" }, { imageSrc: "/gallery/human/4.png" }, { imageSrc: "/gallery/human/3.png" }, { imageSrc: "/gallery/human/2.png" }, { imageSrc: "/gallery/human/5.png" }];
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />
        <div className="items-center flex flex-col gap-8 mb-28 text-6xl font-semibold">
          <Breadcrumb aria-label="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/work">Work</Breadcrumb.Item>
            <Breadcrumb.Item>Human Interest</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl mb-4">Human Interest</h1>
          <div class="columns-1 md:columns-2 xl:columns-3 gap-5 ">
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
