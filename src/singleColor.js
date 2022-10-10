import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // console.log(rgb);
  // console.log(bcg);
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p>copied to clipboard</p>}
      {/* <p>{hex}</p> */}
    </article>
  );
}

export default SingleColor;
