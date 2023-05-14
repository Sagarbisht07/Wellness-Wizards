import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const Logout = () => {
  return (
    <div>
      <button
        type="button"
        class="py-1 px-2 flex justify-center items-center  bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
        Logout
        <span class="p-2 ml-4">
        <HiOutlineLogout/>
        </span>
      </button>
    </div>
  );
};

export default Logout;
