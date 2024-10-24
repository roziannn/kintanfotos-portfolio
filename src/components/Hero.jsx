const Hero = () => {
  return (
    <header class="flex flex-col lg:flex-row justify-between lg:mb-20">
      <div class="text-center lg:text-left mb-20 lg:mb-0">
        <div class="flex items-center justify-center lg:justify-start gap-2 mb-10">
          <span class="w-20 h-0.5 bg-lime-500"></span>
          <p class="font-bold text-lime-600 text-4xl">Kintania Marsha Diva</p>
        </div>

        <h1 class="font-bold text-gray-800 text-4xl md:text-4xl xl:text-6xl mb-10">
          Photographer & <br /> Designer <br />
        </h1>

        <p class="font-normal max-w-2xl text-gray-500 text-sm md:text-md xl:text-lg mb-10">
          My goal was to help my clients explore their emotions, reveal their natural beauty, and to capture the results through my lens. Plus I am always open to new ideas and want my clients to feel as comfortable and in control as
          possible.
        </p>

        <div class="space-y-5 lg:space-x-5 mb-10">
          <a href="#" class="block md:inline px-8 py-3 font-medium bg-lime-500 text-white text-lg hover:bg-lime-600 transiton ease-in-out duration-300">
            About Me
          </a>

          <a href="#" class="block md:inline px-8 py-3 font-medium text-lime-800 text-lg border-2 border-lime-800 hover:bg-lime-800 hover:text-white transiton ease-linear duration-300">
            View Portfolio
          </a>
        </div>

        <hr class="text-gray-500 mb-5" />
        <span class="font-bold text-gray-500 text-sm">Currently open for work.</span>
      </div>

      <div class="mx-auto lg:mx-0">
        <img src="/profile.jpg" class="rounded-full ring-8 ring-gray-200 max-w-xs lg:max-w-sm" alt="Image Profile" />
      </div>
    </header>
  );
};

export default Hero;
