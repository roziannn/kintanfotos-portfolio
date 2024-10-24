const HireMe = () => {
  return (
    <section className="bg-gray-100 py-20 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="font-bold text-gray-900 text-4xl lg:text-5xl mb-8 lg:mb-14">"Taking an image, reveals how rich reality truly is."</p>

        <div className="justify-center">
          {/* <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition">Book Me Now</button> */}
          <a href="#" className="block md:inline px-0 py-3 lg:px-8 lg:py-4 font-medium bg-lime-500 text-white text-lg hover:bg-lime-600 transiton ease-in-out duration-300">
            BOOK ME NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
