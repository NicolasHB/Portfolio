import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


export default function Circleitems({ percentage, name, id }) {
  return (
    <div
      className="flex" style={{ width: 100, height: 100 }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        width="20%"
        height="10px"
        background
        backgroundPadding={6}
        name={name}
        key={id}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
          
        })}
      />
    </div>
  );
}
