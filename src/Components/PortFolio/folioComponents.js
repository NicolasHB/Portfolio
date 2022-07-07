import React from 'react';
import FolioItems from './FolioItems';

export default function FolioComponents() {
    const FolioImg = [
      {
        image:
          "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        id: 1,
      },
      {
        image:
          "https://images.unsplash.com/photo-1620866476625-41f4780a578a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        id: 2,
      },
    ];
  return (
    <div className="bg-gray-50 p-5 mr-10 	">
      <div className="">
        <h1 className="text-6xl font-extrabold pb-10">Mon Portfolio</h1>
      </div>
      <div className="">
        {FolioImg.map((item) => (
          <FolioItems src={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
}
