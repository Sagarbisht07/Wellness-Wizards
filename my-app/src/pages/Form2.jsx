import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useRef } from "react";

const Form2 = () => {
  let navigate = useNavigate();

  let name = useRef();
  let age = useRef();
  let dob = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.current.value &&
      age.current.value &&
      dob.current.value 
    ) {
      navigate("/res");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the Detiles!",
      });
    }
  };
  return (
    <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-10">
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 text-gray-500 bg-white text-xl">
              Your Detiles
            </span>
          </div>
        </div>
        <div className="mt-6">
          <div className="w-full space-y-6">
            <div className="w-full">
              <div className=" relative ">
                <label className="text-gray-700 text-2xl" htmlFor="email">
                  {" "}
                  How tall are you?
                </label>
                <input
                  ref={name}
                  type="text"
                  id="search-form-price"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Height in cm"
                />
              </div>
            </div>
            <div className="w-full">
              <div className=" relative ">
                <label className="text-gray-700 text-2xl" htmlFor="email">
                  {" "}
                  How much do you weigh?
                </label>
                <input
                  ref={age}
                  type="number"
                  id="search-form-location"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Weight in kg"
                />
              </div>
            </div>
            <div className="w-full">
              <div className=" relative ">
                <label className="text-gray-700 text-2xl   " htmlFor="email">
                  {" "}
                  What's your goal weight?
                </label>
                <input
                  ref={dob}
                  type="number"
                  id="search-form-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Goal Weight in kg"
                />
              </div>
            </div>
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Submit
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
        <p className="text-xs leading-5 text-gray-500">
          This data helps us to find your perfect match
        </p>
      </div>
    </div>
  );
};

export default Form2;
