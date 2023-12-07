import React from 'react';

export default function TextField   (props: any) {
    return (
        <div className="mb-7 sm:mb-0 text-slate-600">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium">{props.labelText}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className="text-sm rounded focus:outline-none w-full p-2.5 bg-white border-gray-600 placeholder-slate-400 shadow hover:shadow-lg focus:shadow-lg" required autoComplete='off'/>
        </div>
    )
}
