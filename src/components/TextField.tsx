import React from 'react';

export default function TextField   (props: any) {
    return (
        <div className="w-full xl:w-[45%] lg:w-[40%]">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200">{props.labelText}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:hover:border-blue-500" required autoComplete='off'/>
        </div>
    )
}
