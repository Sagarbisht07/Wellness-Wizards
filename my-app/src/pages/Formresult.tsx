import React, { useEffect, useState } from "react";

const Formresult = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isVisible && (
        <h1 className="text-3xl text-center font-bold mt-10 text-black mx-auto w-1/2 "
        style={{
            fontFamily:"inherit"
        }}
        
        >
          Creating a weakly deit plan according to your need{" "}
        </h1>
      )}
      {isVisible && (
        <img
          className="mx-auto"
          src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          alt="load"
        />
      )}

      {!isVisible && (
        <img className="mx-auto " src="dite.png" alt="load" width={"70%"} />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day1_480x480.png?v=1672221303"
          alt="load"
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="day2.png"
          alt="load"
          style={{
            width: "20%",
            marginRight: "55rem",
          }}
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day2_480x480.png?v=1672221547"
          alt="load"
        />
      )}

      {/* day3 */}
      {!isVisible && (
        <img
          src="day3.png"
          alt="load"
          style={{
            width: "15%",
            marginLeft: "14rem",
          }}
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day3_480x480.png?v=1672221665"
          alt="load"
        />
      )}
      {/* day4 */}
      {!isVisible && (
        <img
          src="day4.png"
          alt="load"
          style={{
            width: "8%",
            marginLeft: "13rem",
          }}
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day4_480x480.png?v=1672221757"
          alt="load"
        />
      )}

      {!isVisible && (
        <img
          src="day5.png"
          alt="load"
          style={{
            width: "25%",
            marginLeft: "12rem",
          }}
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day5_480x480.png?v=1672221864"
          alt="load"
        />
      )}

      {!isVisible && (
        <img
          src="day6.png"
          alt="load"
          style={{
            width: "23%",
            marginLeft: "13rem",
          }}
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day6_480x480.png?v=1672221942"
          alt="load"
        />
      )}

      {!isVisible && (
        <img
          src="day7.png"
          alt="load"
          style={{
            width: "7%",
            marginLeft: "14rem",
          }}
        />
      )}
      {!isVisible && (
        <img
          className="mx-auto"
          src="https://cdn.shopify.com/s/files/1/0512/8827/7146/files/day7_480x480.png?v=1672222009"
          alt="load"
        />
      )}
    </div>
  );
};

export default Formresult;
