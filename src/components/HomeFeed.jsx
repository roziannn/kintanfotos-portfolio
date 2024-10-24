const HomeFeeds = () => {
  return (
    <section class="py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex justify-center space-x-2 md:space-x-5 xl:space-x-8 mb-2 md:mb-5 xl:mb-8">
          <div class="space-y-2 md:space-y-5 xl:space-y-8">
            <img src="gallery/homeFeed/1.png" width={620} alt="Image" class="hover:opacity-75 transition ease-in-out duration-300" />

            <img src="gallery/homeFeed/3.png" width={620} alt="Image" class="hover:opacity-75 transition ease-in-out duration-300" />
          </div>

          <div>
            <img src="gallery/homeFeed/5.png" height={620} alt="Image" class="hover:opacity-75 transition ease-in-out duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeeds;
