import React from 'react'

export default function DataField(props: any) {
  return (
    <div className='flex items-center gap-7 w-80 mt-12 sm:mt-0 font-sans bg-gray-900 rounded-lg px-3 py-5 shadow-2xl shadow-gray-900'>
      {/* <p className="h-fit mr-7 p-2 rounded-lg" style={{backgroundColor: `${props.bgColor}`}}>{props.dataLabel}: </p> */}
      <p className="h-fit sm:w-24 p-2 text-center text-blue-300 rounded-lg">{props.dataLabel}: </p>
      <p className="">{props.dataText}</p>
    </div>
  )
}
