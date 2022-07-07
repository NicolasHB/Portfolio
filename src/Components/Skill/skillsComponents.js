import React from 'react';
import SkillProgressBar from './SkillProgressBar';
import SkillsSection1 from './SkillsSection1';
import SkillsSection2 from './SkillsSection2';
import SkillsSection3 from './SkillsSection3';


export default function SkillsComponents() {
  return (
    <div className="bg-gray-50 p-5 mr-10 	">
      <div className="">
        <h2 className="text-gray-600 text-xl ">Ce que je fais bien</h2>
        <h1 className="text-6xl font-extrabold pb-10">Mes Compétences</h1>
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold text-left pb-10">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quia, suscipit magnam officia nihil nesciunt ipsam soluta tenetur
          doloribus quod?
        </p>
      </div>
      <SkillsSection1 />
      <SkillsSection2 />
      <SkillsSection3 />
      <SkillProgressBar />
    </div>
  );
}
