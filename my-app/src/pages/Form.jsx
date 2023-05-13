import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  let navigate = useNavigate();

  let name = useRef();
  let age = useRef();
  let dob = useRef();
  let goal = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
    console.log(dob.current.value);
    console.log(goal.current.value);
    if (
      name.current.value &&
      age.current.value &&
      dob.current.value &&
      goal.current.value
    ) {
      navigate("/form2");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the Detiles!",
      });
    }
  };

  return (
    <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <div class="px-4 py-8 sm:px-10">
        <div class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm leading-5">
            <span class="px-2 text-gray-500 bg-white text-xl">
              Your Detiles
            </span>
          </div>
        </div>
        <div class="mt-6">
          <div class="w-full space-y-6">
            <div class="w-full">
              <div class=" relative ">
                <input
                  ref={name}
                  type="text"
                  id="search-form-price"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div class="w-full">
              <div class=" relative ">
                <input
                  ref={age}
                  type="number"
                  id="search-form-location"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Age"
                />
              </div>
            </div>
            <div class="w-full">
              <div class=" relative ">
                <input
                  ref={dob}
                  type="date"
                  id="search-form-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Date of Birth"
                />
              </div>
            </div>
            <div class="w-full">
              <div class=" relative ">
                <select
                  ref={goal}
                  id="search-form-name"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                  <option value="">Choose your Goal</option>
                  <option value="Lose weight">Lose weight</option>
                  <option value="Maintain weigh">Maintain weight</option>
                  <option value=">Gain weight">Gain weight</option>
                  <option value="Gain muscle">Gain muscle</option>
                </select>
              </div>
            </div>
            <div>
              <span class="block w-full rounded-md shadow-sm">
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Next
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
        <p class="text-xs leading-5 text-gray-500">
          This data helps us to find your perfect match
        </p>
      </div>
    </div>
  );
};

export default Form;
