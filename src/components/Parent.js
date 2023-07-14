import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import React from "react";

const Parent = () => {
  const [option, setOption] = useState("");

  return (
    <div>
      <Child1 setOption={setOption} />
      <Child2 setOption={setOption} />
      <p>Selected option:{option}</p>
    </div>
  );
};
export default Parent;
