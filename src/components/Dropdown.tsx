export default function Dropdown(props: any) {
    return (
        <div className="w-full xl:w-[45%] lg:w-[40%] mb-7 sm:mb-0">
            <label htmlFor={props.labelFor} className="block mb-2 text-sm font-medium text-slate-200">{props.labelText}</label>
            <select name={props.name} id="pet-select" className="border border-gray-300 text-sm rounded-lg focus:outline-none w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500">
                <option value="">{props.placeholder}</option>
                {props.options.map((option: any) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
