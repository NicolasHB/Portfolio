import React from 'react'

export default function SkillsSection2() {
  return (
    <div className=" grid-cols-2 flex space-x-20 ">
      <div className="relative pt-1 ">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
              JavaScript
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-900">
              75%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
          <div
            style={{ width: "75%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-600 to-pink-600 "
          ></div>
        </div>
      </div>
      <div className="relative pt-1 ">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
              React
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-gray-900">
              100%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
          <div
            style={{ width: "100%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-400 to-yellow-300"
          ></div>
        </div>
      </div>
    </div>
  );
}
