import DataField from "./DataField"

export default function Card(props: any) {
  return (
    <div className="relative w-full sm:w-4/5 mx-auto mt-10 p-10 flex flex-wrap sm:gap-10 bg-gray-800 rounded-lg">
      <button onClick={props.deleteCard} className="close-button w-30 text-white font-medium hover:scale-110 rounded-lg text-sm px-5 py-2.5 text-center absolute top-3 right-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="red"></path> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="red"></path></svg>
      </button>
      <DataField dataLabel="Pickup" dataText="St # 01, H # 01, A-Block, B-17"/>
      <DataField dataLabel="Dropoff" dataText="Zero Point ISB"/>
      <DataField dataLabel="Date" dataText="16/05/2023"/>
      <DataField dataLabel="Time" dataText="09:00 AM"/>
      <DataField dataLabel="Fare (Rs.)" dataText="350"/>
      <DataField dataLabel="Car Type" dataText="Small Hatchback (Mehran, Alto etc.)"/>
      <DataField dataLabel="AC" dataText="Yes"/>
      <DataField dataLabel="Comments" dataText="None"/>
    </div>
  )
}
