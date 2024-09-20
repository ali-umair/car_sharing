import { useEffect } from "react";
import FilterForm from "./FilterForm";

export default function Navbar(props: any) {
  // let stroke: string;

  let filterForm: any;
  useEffect(() => {
    filterForm = document.querySelector("#filter-form");
  })

  // props.isDarkTheme ? stroke = "#E1E7EF" : stroke = "#E11D48"

  return (
    <nav className="w-[90%] sticky top-4 z-10 bg-slate-50 dark:bg-neutral-800 px-4 py-2.5 mt-4 flex justify-between items-center rounded-lg shadow-lg">
      <div className="">
        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.6 12.25H8.2M1 7.25L3.4 8.5L4.92477 3.73509C5.2395 2.75156 5.39686 2.2598 5.68875 1.89623C5.9465 1.57517 6.2775 1.32665 6.65141 1.17347C7.07483 1 7.57246 1 8.56772 1H17.4323C18.4275 1 18.9252 1 19.3486 1.17347C19.7225 1.32665 20.0535 1.57517 20.3113 1.89623C20.6031 2.2598 20.7605 2.75156 21.0752 3.73509L22.6 8.5L25 7.25M17.8 12.25H21.4M6.76 8.5H19.24C21.2562 8.5 22.2643 8.5 23.0344 8.90873C23.7118 9.26825 24.2625 9.84193 24.6076 10.5475C25 11.3497 25 12.3998 25 14.5V17.875C25 18.4558 25 18.7462 24.9539 18.9877C24.7645 19.9795 24.0203 20.7547 23.0682 20.952C22.8364 21 22.5576 21 22 21H21.4C20.0745 21 19 19.8807 19 18.5C19 18.1548 18.7314 17.875 18.4 17.875H7.6C7.26863 17.875 7 18.1548 7 18.5C7 19.8807 5.92548 21 4.6 21H4C3.44241 21 3.16362 21 2.93178 20.952C1.97973 20.7547 1.23549 19.9795 1.04612 18.9877C1 18.7462 1 18.4558 1 17.875V14.5C1 12.3998 1 11.3497 1.39238 10.5475C1.73752 9.84193 2.28825 9.26825 2.96563 8.90873C3.73572 8.5 4.74381 8.5 6.76 8.5Z" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <div className="buttons flex gap-5">
        {
          props.ShowResetBtn && <button id="filter-btn" onClick={() => { props.fetchData([], false) }} className="">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 17H16M1 11H19M7 23H13" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 1L9 14.8564L17 28.7128" stroke={props.stroke} stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        }
        <button id="filter-btn" onClick={() => { filterForm.showModal() }} className="ml-4">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H16M1 1H19M7 13H13" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        {props.isDarkTheme ? (
          <button type="submit" onClick={props.toggleisDarkTheme} className="">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1V3M11 19V21M3 11H1M5.31412 5.31412L3.8999 3.8999M16.6859 5.31412L18.1001 3.8999M5.31412 16.69L3.8999 18.1042M16.6859 16.69L18.1001 18.1042M21 11H19M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        ) : (
          <button type="submit" onClick={props.toggleisDarkTheme} className="">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9548 11.9115C19.5779 14.3267 16.9791 15.9552 14 15.9552C9.58172 15.9552 6 12.3734 6 7.95516C6 4.9758 7.62867 2.37683 10.0443 1C4.96975 1.48114 1 5.75444 1 10.9549C1 16.4778 5.47715 20.9549 11 20.9549C16.2002 20.9549 20.4733 16.9856 20.9548 11.9115Z" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        )
        }
        <button type="submit" onClick={props.logout} className="">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.005 1V11M16.365 5.64C17.6234 6.89879 18.4803 8.50244 18.8273 10.2482C19.1743 11.9939 18.9959 13.8034 18.3146 15.4478C17.6334 17.0921 16.4798 18.4976 14.9998 19.4864C13.5199 20.4752 11.7799 21.0029 10 21.0029C8.2201 21.0029 6.48016 20.4752 5.00018 19.4864C3.5202 18.4976 2.36664 17.0921 1.68537 15.4478C1.00409 13.8034 0.825693 11.9939 1.17272 10.2482C1.51975 8.50244 2.37663 6.89879 3.635 5.64" stroke={props.stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <dialog className="w-4/5 sm:3/5 p-10 rounded-lg" id="filter-form">
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
