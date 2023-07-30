import React from 'react';
import './cardNew.css';
import DataField from "./DataField";

export default function CardNew(props: any) {
    console.log(props)
  return (
    <div className='h-24 w-2/3 bg-indigo-900 bg-opacity-50 flex flex-col justify-center mt-5 mb-5 p-5 rounded-lg border-2 border-gray-700'>
        <p className='text-indigo-400 text-sm font-bold'>{props.doc.pickup_location} -------- {props.doc.dropoff_location} (Rs. {props.doc.fare}/-)</p>

    </div>
  )
}
