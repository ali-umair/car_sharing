import { useState } from 'react';
import TextField from './TextField';

export default function LoginForm(props: any) {
    const [isDarkTheme, setisDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    const [stroke, setStroke] = useState(isDarkTheme ? "#E11D48" : "#E1E7EF");
    const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
    let svg;

    isDarkTheme ? body.classList.add("dark") : body.classList.remove("dark");

    function toggleisDarkTheme() {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            setisDarkTheme(true);
            setStroke("#E1E7EF");
         } else {
            setisDarkTheme(false);
            setStroke("#E11D48");
         }
        console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return (
        <form className='w-[80%] sm:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/5 h-screen m-auto items-center justify-center rounded flex flex-col' onSubmit={props.submitForm}>
            <div onClick={toggleisDarkTheme} className="absolute top-3 p-2 bg-slate-300 hover:bg-slate-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 shadow rounded-lg flex justify-between items-center">
                {isDarkTheme ? (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1V3M11 19V21M3 11H1M5.31412 5.31412L3.8999 3.8999M16.6859 5.31412L18.1001 3.8999M5.31412 16.69L3.8999 18.1042M16.6859 16.69L18.1001 18.1042M21 11H19M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                ) : (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9548 11.9115C19.5779 14.3267 16.9791 15.9552 14 15.9552C9.58172 15.9552 6 12.3734 6 7.95516C6 4.9758 7.62867 2.37683 10.0443 1C4.96975 1.48114 1 5.75444 1 10.9549C1 16.4778 5.47715 20.9549 11 20.9549C16.2002 20.9549 20.4733 16.9856 20.9548 11.9115Z" stroke="#E11D48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )}
            </div>
            <h1 className='text-xs sm:text-sm font-extrabold leading-tight tracking-tight text-rose-600 mb-4'>SIGN IN</h1>
            <div className="w-full mb-3">
                {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-200">{props.labelText}</label>
                <input type="email" name="email" placeholder="Your Email" className="border border-gray-300 text-sm rounded-lg focus:outline-none w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500" required autoComplete='off' /> */}
                <TextField labelText="Email" type="email" name="email" placeholder="Your Email" />
            </div>
            <div className="w-full mb-3">
                {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-200">{props.labelText}</label>
                <input type="password" name="password" placeholder="Your Password" className="border border-gray-300 text-sm rounded-lg focus:outline-none w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500" required autoComplete='off' /> */}
                <TextField labelText="Password" type="password" name="password" placeholder="Your Password" />
            </div>
            <button type="submit" className="w-[40%] text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-normal rounded-lg text-xs mb-3 px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">SIGN IN</button>
            <p className="text-xs text-slate-600 dark:text-slate-500 mb-6">Still not connected? <span className='text-rose-600 font-medium'>Sign Up</span></p>
            <div className="mb-3">
                <svg width="96" height="18" viewBox="0 0 96 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9H36" stroke="#E11D48" />
                    <line x1="60" y1="8.5" x2="96" y2="8.5" stroke="#E11D48" />
                    <rect x="39.5" y="0.5" width="17" height="17" rx="8.5" stroke="#E11D48" />
                </svg>

            </div>
            <button onClick={props.OAuth}
                className="p-2 border border-slate-500 rounded-full hover:border-rose-600 duration-150">
                <img className="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            </button>
        </form>
    )
}
