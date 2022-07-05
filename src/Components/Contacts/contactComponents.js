import React from 'react'
import ContactFormulaire from './ContactFormulaire';

export default function ContactComponents() {
  return (
    <div className="bg-gray-50 p-5 mr-10">
      <div className="">
        <h1 className="text-6xl font-extrabold pb-10">Contactez moi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          rem. In officiis, alias quis ea quaerat veniam accusantium facere quae
          minus, perferendis odio nostrum eos!
        </p>
      </div>
      <div className="">
        <ContactFormulaire />
        <div className="pt-5">
          <button className=" bg-blue-800 text-white ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
