const Navbar = () => {
  return (
    <nav className="flex-wrap lg:flex items-center justify-between mb-24 xl:mb-24" x-data="{navbarOpen:false}">
      <div className="flex items-center mb-10 lg:mb-0">
        <p className="text-2xl font-bold">K I N T A N F O T O S</p>
        <button className="w-10 h-10 lg:hidden ml-auto flex items-center justify-center text-lime-500 border border-lime-500 rounded-md">
          <i data-feather="menu"></i>
        </button>
      </div>

      <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mb-10 xl:mb-0">
        {/* <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transiton ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Services</a>
        </li> */}
        <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transiton ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Work Gallery</a>
        </li>
        <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transiton ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">About</a>
        </li>
        <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transiton ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Business</a>
        </li>
        <li className="font-medium text-gray-500 text-lg hover:text-gray-400 transiton ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Contact</a>
        </li>{" "}
        <li className="px-6 py-2 font-medium text-lime-800 text-lg text-center border-2 border-lime-500 hover:bg-lime-500 hover:text-white transiton ease-linear duration-300 cursor-pointer">
          <a href="#">Hire me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
