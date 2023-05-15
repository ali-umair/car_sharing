import React from 'react';

export default function TextField   (props: any) {
    return (
        <div className="w-full xl:w-[45%] lg:w-[40%] mb-7 sm:mb-0">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-200">{props.labelText}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className="border border-gray-300 text-sm rounded-lg focus:outline-none w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500" required autoComplete='off'/>
        </div>
    )
}
