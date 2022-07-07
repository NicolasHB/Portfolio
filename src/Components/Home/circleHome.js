import React from 'react';
import CircleItems from './CircleItems';


export default function circleHome() {
    const Circleitems = 
   
    [
        {
        percentage: 75,
        name: "intution",
        id: 1,
        },
        {
        percentage:83 ,
        name: "Creativité",
        id: 2,
        },
        {
        percentage: 25,
        name: "Pure Luck",
        id: 3,
        },
        {
        percentage: 95,
        name: "Awesomeness",
        id: 4,
        },

    ];
  return (
    <div className=" flex space-x-5 pt-10 pl-40 pr-40 pb-10" >
      {Circleitems.map((Citem) => (
        <CircleItems
          percentage={Citem.percentage}
          name={Citem.name}
          key={Citem.id}
        />
      ))}
    </div>
  );
}

