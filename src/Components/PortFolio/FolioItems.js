import React from 'react'

export default function Folioitems({image, id}) {
  return (
    <div>
        <img src={image} key={id} alt="" />
    </div>
  );
}
