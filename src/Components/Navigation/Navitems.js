import React from 'react'
import { Link } from "react-router-dom";

export default function Navitems({slug, id, name}) {
  return (
    <li key={id} className="">
      <Link to={slug}>{name}</Link>
    </li>
  );
}
