import React from 'react'

export default function ServiceSection1() {
  return (
    <div className="flex ">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      </div>
      <div className="">
        <h3 className="font-bold">Développement de site web</h3>
        <p className='text-sm'>
          La création de site web est indispensable pour améliorer la visibilité
          de ses activités. Le développement de votre site web est réalisé avec
          soin et répond aux standards web du W3C.
        </p>
      </div>
    </div>
  );
}
