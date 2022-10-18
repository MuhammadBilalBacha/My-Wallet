import React from "react";
// import { ethers } from "ethers";

const Connect = (props) => {
  return (
    <div>
      <div className="container py-3">
        <div className="text-center">
          <button
            onClick={props.janan}
            className="buttonmain py-3 fw-bold mt-5"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
