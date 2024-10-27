const CategoryItem = ({ imageSrc, title }) => {
  return (
    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
      <a href="#">
        <img className="rounded-lg" src={imageSrc} alt={title} />
      </a>
      <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
        <h1 className="text-2xl lg:text-6xl">{title}</h1>
      </figcaption>
    </figure>
  );
};

const Work_Category = () => {
  const categories = [
    //create array with 2 param
    { imageSrc: "/gallery/nature/1.png", title: "NATURE" },
    { imageSrc: "/gallery/landscape/1.png", title: "LANDSCAPE" },
    { imageSrc: "/gallery/human/1.png", title: "HUMAN\nINTEREST" },
    { imageSrc: "/gallery/event/1.png", title: "EVENT" },
    { imageSrc: "/gallery/animal/1.png", title: "ANIMAL" },
    { imageSrc: "/gallery/graduate/1.png", title: "GRADUATION" },
    { imageSrc: "/gallery/still/1.png", title: "STILL LIFE" },
    { imageSrc: "/gallery/video/1.png", title: "VIDEOGRAPH" },
    { imageSrc: "/gallery/food/1.png", title: "FOOD/CULINARY" },
  ];
  return (
    <>
      <div className="items-center flex flex-col gap-8 mb-28 text-6xl font-semibold">
        <h1 className="text-4xl lg:text-5xl mb-4">Gallery Categories</h1>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <CategoryItem key={index} imageSrc={category.imageSrc} title={category.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work_Category;
