import Nav from "../components/Navbar";
import Footer from "../components/Footer";

import { Breadcrumb, Button } from "flowbite-react";

// const Item = ({ imageSrc }) => {
//   return (
//     <div class=" break-inside-avoid mb-8">
//       <img class="h-auto max-w-full rounded-lg" src={imageSrc} alt="Gallery image" />
//     </div>
//   );
// };

const Videograph = () => {
  //   const items = [
  //     { imageSrc: "/gallery/videograph/1.png" },
  //     { imageSrc: "/gallery/videograph/thumbnail.png" },
  //     { imageSrc: "/gallery/videograph/4.png" },
  //     { imageSrc: "/gallery/videograph/5.png" },
  //     { imageSrc: "/gallery/videograph/6.png" },
  //     { imageSrc: "/gallery/videograph/7.png" },
  //     { imageSrc: "/gallery/videograph/8.png" },
  //     { imageSrc: "/gallery/videograph/2.png" },
  //     { imageSrc: "/gallery/videograph/9.png" },
  //     { imageSrc: "/gallery/videograph/10.png" },
  //     { imageSrc: "/gallery/videograph/11.png" },
  //   ];
  return (
    <>
      <div className="container pt-5 bg-white max-w-screen-xl mx-auto px-4">
        <Nav />
        <div className="items-center flex flex-col gap-8 mb-28 text-6xl font-semibold">
          <Breadcrumb aria-label="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/work">Work Gallery</Breadcrumb.Item>
            <Breadcrumb.Item>Videograph</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl mb-4">Videograph</h1>
          <div class="container columns-1 md:columns-2 xl:columns-2 gap-2">
            <iframe
              className="mb-16"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7T_v_qOnqrU?si=6Zy1HeGrq0GDn-6O"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="mb-16"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tbPpsdz15wE?si=w2GHDuWhGcsKwnY1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="mb-16"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cq8sojQuYUw?si=Pcck6LW7jZoKkpEi"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="mb-16"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/szoIM2FIKKM?si=fl0gSsCYWuc23mZC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="mb-16"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rfOjb_eGSQY?si=uXDpPsTFwa33YyTm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/H-nX56jlsUw?si=lc6FWlB1FZGMtYAB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mb-24">
        <Button href="/work/still-life" size="lg" color="light">
          <svg class="w-6 h-6 mr-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          Still Life
        </Button>
        <Button href="/work/food" size="lg" color="light">
          Food
          <svg class="w-6 h-6 ml-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Videograph;