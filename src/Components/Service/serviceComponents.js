import React from 'react';
import ServiceSection1 from './ServiceSection1';
import ServiceSection2 from './ServiceSection2';
import ServiceSection3 from './ServiceSection3';

export default function ServiceComponents() {
  return (
    <div className="bg-gray-50 p-5 mr-10">
      <div className="">
        <h2 className="text-gray-600 text-xl ">Ce que je vous offre</h2>
        <h1 className="text-6xl font-extrabold pb-10">Mes Services</h1>
      </div>

      <div className="flex grid-cols-3 gap-5">
        <ServiceSection1 />
        <ServiceSection2 />
        <ServiceSection3 />
      </div>
      <div className="pt-10">
        <button className=" bg-blue-700 text-sm">contactez-moi</button>
      </div>
    </div>
  );
}
