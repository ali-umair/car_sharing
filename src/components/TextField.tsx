export default function TextField(props: any) {
    return (
        <div className="w-full p-3 bg-slate-300 dark:bg-neutral-900 rounded-lg flex hover:shadow focus:shadow">
            <div className="w-[30%] sm:w-[20%] 2xl:w-[25%] pl-2 flex items-center">
                <label htmlFor="first_name" className=" text-xs text-black font-medium dark:text-slate-200">
                    {props.labelText}
                </label>
            </div>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className="w-[70%] sm:w-[80%] pl-2 text-black dark:text-white text-xs focus:outline-none bg-transparent 
            placeholder-slate-400" required autoComplete='off' />
        </div>
    )
}