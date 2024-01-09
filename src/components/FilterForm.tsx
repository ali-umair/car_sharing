import Dropdown from "./Dropdown";

export default function FilterForm(props: any) {
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
        <form action="#" className="mt-5 flex flex-wrap gap-5 justify-center" onSubmit={(e: any) => console.log(e)}>
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
                <Dropdown labelFor="AC" labelText="Air Conditioning (AC)" name="AC" placeholder="-- Choose an option --" options={["Yes", "No"]} />
            </div>
            <div className='w-full text-center'>
                <button type="submit" className="w-full sm:w-1/5 mt-5 hover:bg-rose-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-rose-600 focus:ring-rose-800">
                    Filter
                </button>
            </div>
        </form>
    )
}
