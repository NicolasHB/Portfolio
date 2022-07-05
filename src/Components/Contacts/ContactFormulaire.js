import React from 'react'

export default function ContactFormulaire() {
  return (
    <div className=" col-span-2">
      <div className="flex gap-10 ">
        <div className="">
          <input
            className="rounded-l-lg rounded-r-lg"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="">
          <input
            className="rounded-l-lg rounded-r-lg"
            type="text"
            placeholder="E-mail"
          />
        </div>
      </div>
      <div className="pt-5 col-span-2">
        <input
          className="rounded-l-lg rounded-r-lg w-[28rem]"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="pt-5 col-span-2">
        <input
          className="rounded-l-lg rounded-r-lg w-[28rem] h-[6rem]"
          type="text"
          placeholder="Message"
        />
      </div>
    </div>
  );  
}
