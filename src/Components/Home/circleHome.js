import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


export default function circleHome() {
    const percentage = 30;
  return (
    //
    
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        width= '20%'
        height= '10px'
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
    
  );
}

// .CircularProgressbar{
//     width: 50;
//     height: 59;
// }