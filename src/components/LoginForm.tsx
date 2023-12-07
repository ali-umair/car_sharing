import { useEffect } from 'react';
import TextField from './TextField';

export default function LoginForm(props: any) {
    return (
        <form className='w-full md:w-2/3 lg:w-1/3 m-auto mt-10 p-10 items-center rounded flex flex-col gap-4' onSubmit={props.submitForm}>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-rose-600 md:text-2xl pb-3 border-b-2 border-slate-300'>Sign in to your account</h1>
            <div className="w-full">
                {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-200">{props.labelText}</label>
                <input type="email" name="email" placeholder="Your Email" className="border border-gray-300 text-sm rounded-lg focus:outline-none w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500" required autoComplete='off' /> */}
                <TextField labelText="Email" type="email" name="email" placeholder="Your Email" />
            </div>
            <div className="w-full">
                {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-200">{props.labelText}</label>
                <input type="password" name="password" placeholder="Your Password" className="border border-gray-300 text-sm rounded-lg focus:outline-none w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500" required autoComplete='off' /> */}
                <TextField labelText="Password" type="password" name="password" placeholder="Your Password" />
            </div>
            <button type="submit" className="w-full mt-5 text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Sign in</button>
            <button onClick={props.OAuth} disabled
                className="w-full px-4 py-2 border flex gap-4 justify-center border-white rounded-lg text-white hover:border-slate-300 hover:text-slate-300 hover:text-slate-400 duration-150 disabled:text-slate-500 disabled:border-slate-500">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
            </button>
        </form>
    )
}
