import React from 'react'

export default function SkillsSection1() {
  return (
    <div className=" grid-cols- flex space-x-20 ">
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                HTML5
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                70%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "70%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-700 to-violet-500 "
            ></div>
          </div>
        </div>
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                CSS
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                60%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "60%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-orange-500 to-pink-600"
            ></div>
          </div>
        </div>
      </div>
      
  )
}
