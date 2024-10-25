const Work_Category = () => {
  return (
    <>
      <div className="items-center flex flex-col gap-8 mb-28 text-6xl font-semibold">
        <h1 className="text-4xl lg:text-5xl mb-4">Gallery Categories </h1>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/nature/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">NATURE</h1>
              </figcaption>
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/landscape/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">LANDSCAPE</h1>
              </figcaption>
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/human/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">
                  HUMAN <br />
                  INTEREST
                </h1>
              </figcaption>
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/event/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">EVENT</h1>
              </figcaption>
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/animal/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">ANIMAL</h1>
              </figcaption>
            </figure>

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/graduate/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">GRADUATION</h1>
              </figcaption>
            </figure>

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/still/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">STILL LIFE</h1>
              </figcaption>
            </figure>

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/video/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-6xl">VIDEOGRAPH</h1>
              </figcaption>
            </figure>

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img className="rounded-lg" src="/gallery/food/1.png" alt="image description" />
              </a>
              <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
                <h1 className="text-2xl lg:text-5xl">FOOD/CULINARY</h1>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work_Category;
