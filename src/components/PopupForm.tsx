import Dropdown from './Dropdown'
import TextField from './TextField'

export default function PopupForm() {
  let carTypes: Array<string> = ["Small Hatchback (Mehran, Alto etc.)", "Hatchback (Cultus, Passo etc.)", "Sedan (Corolla, Civic etc.)", "SUV (Sportage, BRV etc.)" , "Other"];
  return (
    <form action="#" className="mt-5 flex flex-wrap gap-5 justify-center">
      <TextField labelText="Pickup" type="text" name="pickup_location" placeholder="St # 01, H # 01, A-Block, B-17" />
      <TextField labelText="Dropoff" type="text" name="dropoff_location" placeholder="Zero Point ISB" />
      <TextField labelText="Date" type="date" name="date" />
      <TextField labelText="Time" type="time" name="time"/>
      <TextField labelText="Fare (Rs.)" type="number" name="fare" placeholder="Enter Fare in Rupees" />
      <Dropdown labelFor="carType" labelText="Car Type" placeholder="-- Choose a car type --" options={carTypes}/>
      <Dropdown labelFor="AC" labelText="Air Conditioning (AC)" placeholder="-- Choose an option --" options={["Yes", "No"]}/>
      <div className="w-full xl:w-[45%] lg:w-[40%] mb-3 sm:mb-0">
        <label htmlFor="comments" className="block mb-2 text-sm font-medium text-slate-200">Comments</label>
        <textarea rows={1} className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"></textarea>
      </div>
      <div className='w-full text-center'>
        <button type="submit" className="w-1/2 mt-5 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 focus:ring-blue-800">
          Sign in
        </button>
      </div>
    </form>
  )
}
