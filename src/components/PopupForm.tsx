import Dropdown from './Dropdown'
import TextField from './TextField'

export default function PopupForm(props: any) {
  const carTypes: Array<string> = ["Small Hatchback (Mehran, Alto etc.)", "Hatchback (Cultus, Passo etc.)", "Sedan (Corolla, Civic etc.)", "SUV (Sportage, BRV etc.)", "Other"];
  const days: Array<string> = ["Mon", "Sun", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const locations: Array<string> = [
    "A-Block (B-17)",
    "B-Block (B-17)",
    "C-Block (B-17)",
    "D-Block (B-17)",
    "E-Block (B-17)",
    "F-Block (B-17)",
    "Zero Point (ISB)",
    "Peshawar More (ISB)",
    "26 Number (ISB)",
    "G-10 (ISB)",
    "G-11 (ISB)",
  ]
  return (
    <form action="#" className="mt-5 flex flex-wrap gap-5 justify-center" onSubmit={props.submitPopupForm}>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <Dropdown labelFor="pickup_location" labelText="Pickup" name="pickup_location" placeholder="-- Choose a location --" options={locations} />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <Dropdown labelFor="dropoff_location" labelText="Dropoff" name="dropoff_location" placeholder="-- Choose a location --" options={locations} />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <Dropdown labelFor="day" labelText="Day (You can only post ride for the ongoing week)" name="day" placeholder="-- Choose a day --" options={days} />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <TextField labelText="Pickup Time" type="time" name="pickup_time" />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <TextField labelText="Expected Dropoff Time" type="time" name="dropoff_time" />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <TextField labelText="Fare (Rs.)" type="number" name="fare" placeholder="Enter Fare in Rupees" />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <Dropdown labelFor="carType" labelText="Car Type" name="car_type" placeholder="-- Choose a car type --" options={carTypes} />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <Dropdown labelFor="AC" labelText="Air Conditioning (AC)" name="AC" placeholder="-- Choose an option --" options={["Yes", "No"]} />
      </div>
      <div className="w-full xl:w-[45%] lg:w-[40%]">
        <div className="mb-3 sm:mb-0 text-slate-600">
          <label htmlFor="comments" className="block mb-2 text-sm font-medium">Comments</label>
          <textarea rows={1} name="comments" placeholder='Additional information' className="text-sm rounded block w-full p-2.5 placeholder-slate-400 focus:outline-none shadow hover:shadow-lg focus:shadow-lg"></textarea>
        </div>
      </div>
      {/* <TextField labelText="Date" type="date" name="date" /> */}
      <div className='w-full text-center'>
        <button type="submit" className="w-1/2 mt-5 hover:bg-rose-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-rose-600 focus:ring-rose-800">
          Submit
        </button>
      </div>
    </form>
  )
}
