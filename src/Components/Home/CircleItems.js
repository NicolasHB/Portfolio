import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


export default function Circleitems({ percentage, name, id }) {
  return (
    <div
      className="flex" style={{ width: 80, height: 80 }}
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
      {/* <p className="text-sm">{name}</p> */}
    </div>
  );
}
