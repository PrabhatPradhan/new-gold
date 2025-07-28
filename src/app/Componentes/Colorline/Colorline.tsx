import React from 'react'

export default function Colorline() {
  return (
    <>
    <div className="relative">
  
  <div className="fixed top-0 left-0 w-screen h-[2px] flex z-50">
    <div className="w-1/6 h-full bg-red-500"></div>   
    <div className="w-1/6 h-full bg-yellow-500"></div>
    <div className="w-1/6 h-full bg-orange-500"></div>
    <div className="w-1/6 h-full bg-green-500"></div>
    <div className="w-1/6 h-full bg-blue-500"></div>
    <div className="w-1/6 h-full bg-purple-500"></div>
  </div>
  </div>

    </>
  )
}
