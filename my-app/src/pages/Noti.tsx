import React, { useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";

function Noti(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [clear, setClear] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="flex"
      style={{
        zIndex: 100,
      }}>
      <button
        style={{
          color: "black",
          width: "1%",
          fontSize: "1.5rem",
          marginLeft: "-4rem",
        }}
        onClick={handleOpen}>
        <MdOutlineNotificationsActive />
      </button>
      {isOpen && <div className="fixed inset-0 bg-gray-800 opacity-50"></div>}
      <div
        style={{
          width: "25rem",
        }}
        className={`fixed h-screen top-0 right-0 bg-rgb(123, 113, 174) shadow-lg transform transition-all ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
          style={{
            color: "rgb(255, 37, 80)",
            padding: "0.5rem",
            fontSize: "1.5rem",
          }}
          onClick={handleClose}>
          <GoEyeClosed />
        </button>
        {!clear && (
          <div
          className="gap-2 flex flex-col justify-center items-center mt-1"
          >
            <img
              src="iphone1.png"
              alt="notifaction"
              style={{
                width: "25rem",
              }}
            />
            <img
              src="iphone3.png"
              alt="notifaction"
              style={{
                width: "25rem",
              }}
            />
            <img
              src="iphon2.png"
              alt="notifaction"
              style={{
                width: "25rem",
              }}
            />
            <img
              src="iphone1.png"
              alt="notifaction"
              style={{
                width: "25rem",
              }}
            />
          </div>
        )}
        <br />

        <button
            onClick={() => setClear(true)}
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Clear All
        </button>
      </div>
    </div>
  );
}

export default Noti;
