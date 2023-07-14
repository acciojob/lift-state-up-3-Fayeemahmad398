import React from "react";

const Child1 = (props) => {
  return (
    <>
      <h1>Child Component 1</h1>
      <button
        onClick={() => {
          props.setOption("option 1");
        }}
      >
        option 1
      </button>
    </>
  );
};
export default Child1;
