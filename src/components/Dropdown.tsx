
export default function Dropdown(props: any) {
    return (
        <div className="w-full xl:w-[45%] lg:w-[40%]">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200">dfsdfsdfsd</label>
            <select name="pets" id="pet-select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:hover:border-blue-500">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
        </div>
    )
}
