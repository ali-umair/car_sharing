import { useEffect } from "react";
import FilterForm from "./FilterForm";

export default function Navbar(props: any) {

  let filterForm: any;
  useEffect(() => {
    filterForm = document.querySelector("#filter-form");
  })

  return (
    <nav className="w-4/5 p-2 flex justify-between items-center border-b-2 border-slate-300">
      <h1 className="text-rose-600 text-xl font-bold leading-tight tracking-tight md:text-2xl">Car Sharing</h1>

      <div className="buttons">
        <button id="filter-btn" onClick={() => { filterForm.showModal() }} className="w-30 px-5 py-2.5 text-center border-l-2 border-red-500">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18 7H17M17 7H16M17 7V6M17 7V8M12.5 5H6C5.5286 5 5.29289 5 5.14645 5.14645C5 5.29289 5 5.5286 5 6V7.96482C5 8.2268 5 8.35779 5.05916 8.46834C5.11833 8.57888 5.22732 8.65154 5.4453 8.79687L8.4688 10.8125C9.34073 11.3938 9.7767 11.6845 10.0133 12.1267C10.25 12.5688 10.25 13.0928 10.25 14.1407V19L13.75 17.25V14.1407C13.75 13.0928 13.75 12.5688 13.9867 12.1267C14.1205 11.8765 14.3182 11.6748 14.6226 11.4415M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z" stroke="#e11d48" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        </button>
        <button type="submit" onClick={props.logout} className="w-30 px-5 py-2.5 text-center border-l-2 border-r-2 border-red-500">
          <svg width="24px" height="24px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <g style={{ fill: "none", stroke: "#e11d48", strokeWidth: "12px", strokeLinecap: "round", strokeLinejoin: "round" }}> <path d="m 50,10 0,35"></path> <path d="M 26,20 C -3,48 16,90 51,90 79,90 89,67 89,52 89,37 81,26 74,20"></path> </g> </g></svg>
        </button>
      </div>

      <dialog className="w-3/5 p-10 rounded-lg" id="filter-form">
        <button onClick={() => {
          filterForm.close()
        }} className="close-button w-30 text-black font-medium hover:text-slate-500 rounded text-sm px-5 py-2.5 text-center absolute top-3 right-1">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <FilterForm submitPopupForm={()=>{filterForm.close()}} />
      </dialog>
    </nav>
  )
}
