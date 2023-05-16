import React from 'react'

export default function DataField(props: any) {
  return (
    <div className='flex items-center w-80 mt-10 sm:mt-0 font-sans'>
      {/* <p className="h-fit mr-7 p-2 rounded-lg" style={{backgroundColor: `${props.bgColor}`}}>{props.dataLabel}: </p> */}
      <p className="h-fit sm:w-24 mr-7 p-2 bg-blue-600 text-center rounded-lg">{props.dataLabel}: </p>
      <p className="">{props.dataText}</p>
    </div>
  )
}
