import React from "react";

import "./Loader.css";

const Loader = () => {
  console.log("Cargo");
  return (
    <div className="container">
      <div className="loader">
        <div id="first">
          <div id="second">
            <div id="third"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Loader };
