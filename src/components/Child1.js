import React from "react";

const Child1 = (props) => {
  return (
    <div>
      <h1>Child Component 1</h1>
      <button
        onClick={() => {
          props.setOption("option 1");
        }}
      >
        option 1
      </button>
    </div>
  );
};
export default Child1;
