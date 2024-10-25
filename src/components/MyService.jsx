const Services = () => {
  return (
    <section className="pt-10 lg:pt-5 pb-16 ">
      <div className="container max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-800">What I Can Help You With</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
            <div className="w-24 py-8 flex justify-center bg-gray-100 text-lime-500 rounded-md mb-5 md:mb-10">
              <i className="fa-solid fa-camera-retro text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Photo & Videography</h3>
            <p className="text-gray-600">Capture stunning moments with photography and videography services. I bring creative visions to life, whether it's for personal or commercial projects.</p>
          </div>

          {/* Editing */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
            <div className="w-24 py-8 flex justify-center bg-gray-100 text-lime-500  rounded-md mb-5 md:mb-10">
              <i className="fa-solid fa-pen-ruler text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Editing</h3>
            <p className="text-gray-600">Enhance your visual content with expert photo and video editing services. From color grading to effects, I ensure every piece of content looks polished and professional.</p>
          </div>

          {/* Desain */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
            <div className="w-24 py-8 flex justify-center bg-gray-100 text-lime-500  rounded-md mb-5 md:mb-10">
              <i className="fa-solid fa-palette text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Desain</h3>
            <p className="text-gray-600">I offer creative design services to elevate your brand. From logo creation to marketing materials, I can help build a visual identity that stands out and communicates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
