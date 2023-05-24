import React from 'react'


export default function Message(props: any) {
    return (
        <div className='absolute top-24 left-24 flex items-center justify-between p-3' style={{backgroundColor: `${props.bgColor}`}}>
            <p className='text-md'>{props.message}</p>
            <button onClick={(e) => {
                let card = e.currentTarget.parentElement;
                card?.remove();
            }} className="close-button w-30 text-white font-medium hover:text-slate-500 rounded-lg text-sm px-5 py-2.5 text-center">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}