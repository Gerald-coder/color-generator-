import React, { useEffect, useState } from "react";
import Values from "values.js";
import SingleColor from "./singleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [rangeNum, setRangeNum] = useState(0);

  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      // console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  // const handleChange = (e) => {
  //   setRangeNum(e.target.value);
  // };

  return (
    <>
      <article className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            value={color}
            placeholder="#349f89"
            onChange={(e) => setColor(e.target.value)}
          />

          <button className="btn">generator</button>
          {/* <button
            className="btn"
            style={{ display: "absolute", left: "0", margin: "1rem" }}
            onClick={() => setRangeNum(rangeNum - 1)}
          >
            range decrease
          </button>
          <h3>{rangeNum}</h3>
          <button className="btn" onClick={() => setRangeNum(rangeNum + 1)}>
            range increasr
          </button> */}
        </form>
      </article>
      <article className="colors">
        {list.map((color, index) => {
          console.log(color, index);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </article>
    </>
  );
}

export default App;
