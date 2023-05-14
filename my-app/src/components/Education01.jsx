export const Education01 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6 ">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Embarking on a fitness
              <br className="hidden md:block" />
              journey to unlock
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  your full potential.
                </span>
              </span>
            </h2>
            <p className="text-base text-teal-700 md:text-lg">
              Join us on a transformative fitness journey as we explore the
              latest trends, techniques, and strategies for achieving your
              health and wellness goals. From workout routines to nutrition
              advice, we'll provide you with the tools and inspiration you need
              to unleash your inner athlete and achieve your full potential.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-red-700">
                  Investing in your health and fitness today will pay dividends
                  for the rest of your life.
                </h6>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-red-700">
                  Remember why you started and let that be your motivation to
                  keep going, even when it gets tough.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
