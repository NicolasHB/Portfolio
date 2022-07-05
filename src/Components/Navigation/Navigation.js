import React from 'react';
import Navitems from './Navitems';

export default function Navigation() {
  const items = [
    {
      name: "Home",
      slug: "/",
      id: 1,
    },
    {
      name: "Skills",
      slug: "/Skills",
      id: 2,
    },
    {
      name: "Service",
      slug: "/Service",
      id: 3,
    },
    {
      name: "Portfolio",
      slug: "/Portfolio",
      id: 4,
    },
    {
      name: "Testimony",
      slug: "/Testimony",
      id: 5,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 6,
    },
  ];
  

  return (
    <nav>
      <div className="flex p-5 ">
        <div className="">
          <h1 className="text-3xl font-bold p-3">
            Smith<span className="text-indigo-400">.</span>CV
          </h1>
        </div>
        <ul className="bg-blue-800 flex space-x-5 text-white  items-center divide-x  leading-[2.6] m-3">
          {items.map((item) => (
            <Navitems slug={item.slug} key={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

