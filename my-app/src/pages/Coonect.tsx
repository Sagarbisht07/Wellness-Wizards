import React from "react";
const Coonect = (): JSX.Element => {
  let [sacn, setscan] = React.useState(false);

  return (
    <div className="mx-auto w-1/2 mt-10">
      <img src="connect.png" alt="connection" />
      <button
        className="relative px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        style={{
          marginLeft: "12rem",
        }}
        onClick={() => setscan(!sacn)}>
        {!sacn ? "Tap Here for scanning device" : "Tap Here for stop scanning "}
      </button>
      {!sacn && <img src="connect1.png" alt="" />}
      {sacn && (
        <img
          src="gifscan.gif"
          alt="scanning"
          style={{
              width:"70%",
              marginLeft:"5rem"
            }}
            className="mx-auto"
            
        
        />
        )}
    </div>
  );
};

export default Coonect;
