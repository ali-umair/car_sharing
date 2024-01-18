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
        {
          props.ShowResetBtn && <button id="filter-btn" onClick={() => {props.fetchData([], false)}} className="w-30 px-5 py-2.5 text-center border-l-2 border-red-500">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Filter_Off"> <path id="Vector" d="M13 4H18.4C18.9601 4 19.2409 4 19.4548 4.10899C19.6429 4.20487 19.7948 4.35774 19.8906 4.5459C19.9996 4.75981 20 5.04005 20 5.6001V6.3448C20 6.58444 20 6.70551 19.9727 6.81942C19.9482 6.92146 19.9072 7.01893 19.8524 7.1084C19.7906 7.20931 19.7043 7.2958 19.5314 7.46875L18 9.00012M7.49961 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7083C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9809 14.1475 12.8915C14.2091 12.7909 14.2952 12.7048 14.4669 12.5331L14.4688 12.5314L15.5001 11.5001M15.5001 11.5001L5 1M15.5001 11.5001L19 15" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          </button>
        }
        <button id="filter-btn" onClick={() => { filterForm.showModal() }} className="w-30 px-5 py-2.5 text-center border-l-2 border-red-500">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Filter"> <path id="Vector" d="M20 5.6001C20 5.04005 19.9996 4.75981 19.8906 4.5459C19.7948 4.35774 19.6423 4.20487 19.4542 4.10899C19.2403 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7084C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9808 14.1475 12.8914C14.2089 12.7911 14.2947 12.7053 14.4653 12.5347L14.4688 12.5315L19.5315 7.46875C19.7044 7.2958 19.7904 7.20932 19.8523 7.1084C19.9071 7.01893 19.9482 6.92146 19.9727 6.81942C20 6.70551 20 6.58444 20 6.3448V5.6001Z" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
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
        <FilterForm fetchfilteredData={props.fetchfilteredData} />
      </dialog>
    </nav>
  )
}
