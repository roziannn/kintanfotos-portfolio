const Footer = () => {
  return (
    <footer className="bg-black pt-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
          {/* Left Section (FOTOS) */}
          <div className="mb-10">
            <h2 className="text-4xl font-medium tracking-wider text-lime-400">KINTANFOTOS</h2>
            <p className="opacity-70 mt-4">A Passionate Photographer & Designer with three years experience using lens based on Karawang, Jawa Barat.</p>
            <div className="flex grid-cols-3 gap-5 my-5 text-lg lg:text-xl">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>

          {/* Right Section (Contact) */}
          <div className="mb-10">
            <h3 className="text-xl lg:text-2xl">Feel free to reach out to me on WhatsApp.</h3>
            <p className="opacity-70 mt-4">
              I'm available for photography projects in the Karawang, Bekasi, and Bandung areas. Whether you're looking to capture special moments, events, or stunning visuals, I'd love to collaborate and bring your vision to life.
            </p>

            {/* WhatsApp Button */}
            <div className="subs bg-black w-80 mx-auto lg:mx-0 flex justify-between items-center mt-4 p-4">
              <button id="wa-me" className="flex-1 text-black bg-lime-400 py-4 font-bold transition duration-300 hover:text-white">
                <i className="fab fa-whatsapp"></i> WHATSAPP ME
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="bg-black text-white text-center text-sm py-8">&copy; Copyright KINTANFOTOS 2024</p>
    </footer>
  );
};

export default Footer;
