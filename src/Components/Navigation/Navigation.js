import React from 'react'

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
      <div className="">
        <ul className="flex space-x-5 text-white font-bold">
          {items.map((item) => (
            <ItemNav slug={item.slug} key={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
