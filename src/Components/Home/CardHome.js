import React from 'react';
import CircleHome from './CircleHome';

export default function CardHome() {
  return (
    <div className="bg-gray-50 p-5 mr-10 	">
      <div className="">
        <h2 className="text-gray-600 text-2xl ">Développeur full Stack</h2>
        <h1 className="text-6xl font-extrabold pb-10">Justin Bieber</h1>
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold text-left pb-10">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum
          possimus non magni eos ducimus pariatur. Molestias tempore esse
          consequatur magnam quibusdam, amet cum iure nemo quod omnis rerum ab
          dolorem accusamus fugiat eligendi et nesciunt neque provident
          perspiciatis suscipit. Quae ea tempora culpa labore nemo est,
          doloremque obcaecati voluptatem!
        </p>
      </div>
      <CircleHome/>
    </div>
  );
}
