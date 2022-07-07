import React from 'react';
import SkillItems from './SkillItems';

export default function SkillProgressBar() {
    const Progressitems = [
      {
        name: "HTML5",
        percentage: 70,
        color: "bg-gradient-to-r from-blue-700 to-violet-500",
        id: 1,
      },
      {
        name: "CSS",
        percentage: 60,
        color: "bg-gradient-to-r from-orange-500 to-pink-600",
        id: 2,
      },
      {
        name: "JavaScript",
        percentage: 75,
        color: "bg-gradient-to-r from-blue-600 to-pink-600",
        id: 3,
      },
      {
        name: "React",
        percentage: 100,
        color: "bg-gradient-to-r from-green-400 to-yellow-300",
        id: 4,
      },
      {
        name: "WordPress",
        percentage: 90,
        color: "bg-gradient-to-r from-green-400 to-blue-600",
        id: 5,
      },
      {
        name: "PHP/Laravel",
        percentage: 100,
        color: "bg-gradient-to-r from-red-600 to-orange-500",
        id: 6,
      },
    ];
  return (
    <div>
        {Progressitems.map((Pitem) =>(
            <SkillItems
            name={Pitem.name}
            percentage={Pitem.percentage}
            color={Pitem.color}
            key={Pitem.id}
            />
        ))}
    </div>
  )
}
