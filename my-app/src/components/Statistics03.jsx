export const Statistic03 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div className="grid gap-8 lg:col-span-2">
          <div>
            <p className="mb-2 text-lg font-bold text-red-800">Sleep Cycle</p>
            <p className="text-gray-700 text-teal-800">
              Sleep is divided into two main categories: rapid eye movement
              (REM) sleep and non-REM (NREM) sleep. Each of these categories is
              further divided into stages. Here's a breakdown of the sleep cycle
              stages:
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-bold text-red-800">Stages</p>
            <p className="text-gray-700 text-teal-800">
              Sleep is divided into two main categories: rapid eye movement
              (REM) sleep and non-REM (NREM) sleep. NREM sleep has three stages:
              stage 1 (light sleep), stage 2 (true sleep), and stage 3 (deep
              sleep). REM sleep is the stage of sleep associated with dreaming.
              The sleep cycle lasts about 90-110 minutes and repeats throughout
              the night.
            </p>
          </div>
        </div>
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                NERM-1
              </p>
              <p className="text-1xl font-bold text-deep-purple-accent-400 text-red-800 sm:text-xl">
                10-20 minutes
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                NERM-2
              </p>
              <p className="text-1xl font-bold text-deep-purple-accent-400 sm:text-xl text-red-800">
                20-30 minutes
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base ">
                NERM-3
              </p>
              <p className="text-1xl font-bold text-deep-red-accent-400 text-red-800 sm:text-xl">
                30-40 minutes
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                NERM-4
              </p>
              <p className="text-1xl font-bold text-deep-purple-accent-400 text-red-800 sm:text-xl">
                60 minutes
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                REM
              </p>
              <p className="text-1xl font-bold text-deep-purple-accent-400 text-red-800 sm:text-xl">
                90 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
