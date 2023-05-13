import Dropdown from './Dropdown'
import TextField from './TextField'

export default function PopupForm() {
  return (
    <form action="#" className="mt-5 flex flex-wrap gap-5 justify-center">
      <Dropdown />
      <TextField labelText="To" type="dropdown" name="name" placeholder="placeholder" />
      <TextField labelText="Date" type="date" name="name" placeholder="placeholder" />
      <TextField labelText="Time" type="time" name="name" placeholder="placeholder" />
      <TextField labelText="Fare (Rs.)" type="number" name="name" placeholder="placeholder" />
      <TextField labelText="Car Type" type="dropdown" name="name" placeholder="placeholder" />
      <TextField labelText="Air Conditioning (AC)" type="dropdown" name="name" placeholder="placeholder" />
      <div className="w-full xl:w-[45%] lg:w-[40%]">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200">Comments</label>
            <textarea rows={1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
      </div>
      <div className='w-full text-center'>
        <button type="submit" className="w-1/2 mt-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign in
        </button>
      </div>
    </form>
  )
}
