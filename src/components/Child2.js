import React from "react";
const Child2 = (props) => {
  return (
    <div>
      <h1>Child Component 2</h1>
      <button
        onClick={() => {
          props.setOption("option 2");
        }}
      >
        option 2
      </button>
    </div>
  );
};
export default Child2;
