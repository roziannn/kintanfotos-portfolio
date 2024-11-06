const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
      <div className="w-24 py-8 flex justify-center  hover:scale-125 bg-gray-100 text-lime-500 rounded-md mb-5 md:mb-10">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    { icon: <i className="fa-solid fa-camera-retro text-2xl"></i>, title: "Photo & Videography", desc: "Capture stunning moments with photography and videography services" },
    { icon: <i className="fa-solid fa-pen-ruler text-2xl"></i>, title: "Editing", desc: "From color grading to effects, every piece of content looks polished" },
    { icon: <i className="fa-solid fa-palette text-2xl"></i>, title: "Graphic Design", desc: "Design to cohesive social media feeds, I help build a visual identity that stands out" },
  ];
  return (
    <div className="container max-w-screen-xl mx-auto px-4 pt-10 lg:pt-5  text-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-800">What I Can Help You With</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} desc={service.desc} />
        ))}
      </div>
    </div>
  );
};

export default Services;
