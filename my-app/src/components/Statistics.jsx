export const Statistic = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-2xl font-bold lg:text-5xl text-blue-800 xl:text-6xl">
            7 hrs
          </h6>
          <p class="text-sm font-medium tracking-widest text-red-800 uppercase lg:text-base">
            Sleep
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-2xl font-bold lg:text-5xl xl:text-6xl text-blue-800 ">
            12 hrs
          </h6>
          <p class="text-sm font-medium tracking-widest text-red-800 uppercase lg:text-base">
            Work
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-2xl font-bold lg:text-5xl xl:text-6xl text-blue-800 ">
            2hrs
          </h6>
          <p class="text-sm font-medium tracking-widest text-red-800 uppercase lg:text-base">
            Eat
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-2xl font-bold lg:text-5xl xl:text-6xl text-blue-800 ">
            3 hrs
          </h6>
          <p class="text-sm font-medium tracking-widest text-red-800 uppercase lg:text-base">
            Others
          </p>
        </div>
      </div>
    </div>
  );
};
