export default function Dropdown(props: any) {
    return (
        <div className="mb-7 sm:mb-0 text-slate-600">
            <label htmlFor={props.labelFor} className="block mb-2 text-sm font-medium">{props.labelText}</label>
            <select name={props.name} id="pet-select" className="text-sm rounded w-full p-2.5 placeholder-slate-400 shadow hover:shadow-lg">
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
