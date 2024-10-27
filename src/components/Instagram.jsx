const Instagram = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">FOLLOW ME ON INSTAGRAM</h2>
      <a href="https://instagram.com/kintania_marsha" target="_blank">
        {" "}
        <div className="flex justify-center">
          <span className="block text-center text-2xl lg:text-3xl text-gray-500 mb-10">@kintania_marsha</span>
          <svg className="w-4 h-4  text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
          </svg>
        </div>
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 insta-imgs">
        <div className="relative">
          <img src="/gallery/instagram/1.png" alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-6xl bg-lime-500 bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="relative">
          <img src="/gallery/instagram/2.png" alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-6xl bg-lime-500 bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="relative">
          <img src="/gallery/instagram/4.png" alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-6xl bg-lime-500 bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="relative">
          <img src="/gallery/instagram/5.png" alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-6xl bg-lime-500 bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
