import React from "react";

const BMI = ({ filteredData, myBmi }) => {
  return (
    <div
      className="flex flex-wrap justify-center items-center"
      style={{
        backgroundImage: `url("https://blog.myfitnesspal.com/wp-content/uploads/2020/07/Why-You-Should-Grow-Your-Own-Microgreens-2-930x550.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {filteredData?.map((item) => (
        <div className="bg-white shadow rounded-lg p-6 m-4 w-80" key={item._id}>
          <h2 className="text-2xl font-bold mb-2">
            BMI:{" "}
            <span
              className={
                item.bmi === 17
                  ? "text-red-500"
                  : item.bmi === 21
                  ? "text-yellow-500"
                  : "text-green-500"
              }>
              {myBmi}{" "}
              {item.bmi === 17
                ? "underweight"
                : item.bmi === 21
                ? "overweight"
                : "healthy"}
            </span>
          </h2>
          <div className="text-gray-600 mb-2">
            <p className="mb-1">
              <span className="font-semibold">Exercise:</span> {item.exercise}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Meals:</span> {item.meals}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Meditation:</span>{" "}
              {item.meditation}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Sleep:</span> {item.sleep}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Social:</span> {item.social}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Water:</span> {item.water}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Work:</span> {item.work}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BMI;
