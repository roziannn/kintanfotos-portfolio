const CategoryItem = ({ link, imageSrc, title }) => {
  return (
    <a href={link}>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <img className="rounded-lg" src={imageSrc} alt={title} />
        <figcaption className="absolute inset-0 flex items-center justify-center text-lg text-white">
          <h1 className="text-2xl lg:text-6xl">{title}</h1>
        </figcaption>
      </figure>
    </a>
  );
};

const Work_Category = () => {
  const categories = [
    //create array with 2 param
    { link: "/work/nature", imageSrc: "/gallery/nature/1.png", title: "NATURE" },
    { link: "/work", imageSrc: "/gallery/landscape/1.png", title: "PRODUCT" },
    { link: "/work/human-interest", imageSrc: "/gallery/human/1.png", title: "HUMAN\nINTEREST" },
    { link: "/work/event", imageSrc: "/gallery/event/thumbnail.png", title: "EVENT" },
    { link: "/work/animal", imageSrc: "/gallery/animal/thumbnail.png", title: "ANIMAL" },
    { link: "/work/graduation", imageSrc: "/gallery/graduate/thumbnail.png", title: "GRADUATION" },
    { link: "/work/still-life", imageSrc: "/gallery/still/thumbnail.png", title: "STILL LIFE" },
    { link: "/nature", imageSrc: "/gallery/video/1.png", title: "VIDEOGRAPH" },
    { link: "/work/food", imageSrc: "/gallery/food/thumbnail.png", title: "FOOD" },
  ];
  return (
    <>
      <div className="items-center flex flex-col gap-8 mb-28 text-6xl font-semibold">
        <h1 className="text-4xl lg:text-5xl mb-4">Gallery Categories</h1>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {categories.map((category, index) => (
              <CategoryItem key={index} link={category.link} imageSrc={category.imageSrc} title={category.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work_Category;
