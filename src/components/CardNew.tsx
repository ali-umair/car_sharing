import { useEffect } from 'react';
import './cardNew.css';
import DataField from "./DataField";
import { FaCarSide } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IconContext } from 'react-icons';

export default function CardNew(props: any) {
  let angleDown: any;
  useEffect(() => {
    angleDown = document.querySelector("#angle-down");
  })
  const rotate = () => {
    angleDown.classList.toggle('rotate');
    angleDown.classList.toggle('down');
  };
  return (
    <div className="font-roboto flex flex-col items-center justify-center gap-10 pt-10">
      <div className="rounded bg-gray-100 px-5 pt-5 shadow-xl">
        <div className="flex w-96">
          <div className="flex flex-col justify-between leading-4">
            <div className="mb-3">
              <div className="text-xs font-bold text-slate-400">Sun</div>
              <div className="text-sm font-bold tracking-widest">12:10 PM</div>
            </div>
            {/* <div className="text-xs font-bold tracking-widest text-slate-400">12:10 PM</div>
            <div className="text-xs font-bold tracking-widest text-slate-400">12:10 PM</div> */}
            <div className="mt-3">
              <div className="text-xs font-bold text-slate-400">Arrive</div>
              <div className="text-sm font-bold tracking-widest">12:10 PM</div>
            </div>
          </div>
          <div className="mx-5 flex w-1 flex-col justify-center gap-1 rounded">
            <div className="h-1 w-1 rounded-full bg-slate-600"></div>
            <div className="h-3 w-1 rounded-full bg-slate-400"></div>
            <div className="h-2/3 w-1 rounded-full bg-pink-700"></div>
            <div className="h-3 w-1 rounded-full bg-slate-400"></div>
            <div className="h-1 w-1 rounded-full bg-slate-600"></div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-3 font-bold">Cairo-Festival City Mall</div>
            {/* <div className="text-xs font-bold tracking-wider text-slate-400">Intermediate stop</div>
            <div className="text-xs font-bold tracking-wider text-slate-400">Intermediate stop</div> */}
            <div className="mt-3 font-bold">Arkan Plaza</div>
          </div>
        </div>
        <div className="mt-3 h-[3px] w-full bg-slate-200"></div>
        <div className="my-2 flex gap-2">
          <div className="flex h-5 w-12 items-center justify-center gap-1 rounded bg-slate-300 text-xs font-bold text-slate-500">
            <svg fill="#64748b" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 48.999 48.999" stroke="#64748b">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g><path d="M47.503,12.835h-1.994c-0.834,0-1.508,0.675-1.508,1.508v0.377h-1.185L40.354,3.08c-0.147-0.697-0.762-1.196-1.476-1.196 H10.133c-0.713,0-1.327,0.499-1.476,1.196L6.194,14.722H5.01v-0.377c0-0.833-0.676-1.508-1.509-1.508H1.507 C0.674,12.836,0,13.512,0,14.344v4.777c0,0.833,0.673,1.508,1.507,1.508h1.994c0.833,0,1.509-0.675,1.509-1.508v-2.389h0.864v8.674 v15.979c0,0.833,0.674,1.51,1.508,1.51h0.652v1.807c0,1.333,1.081,2.414,2.413,2.414h2.209c1.335,0,2.414-1.081,2.414-2.414v-1.807 h18.854v1.807c0,1.333,1.082,2.414,2.414,2.414h2.212c1.333,0,2.415-1.081,2.415-2.414v-1.807h0.651 c0.832,0,1.508-0.677,1.508-1.51V25.407v-8.674h0.862v2.389c0,0.833,0.677,1.508,1.511,1.508h1.991 c0.835,0,1.511-0.675,1.511-1.508v-4.777C49.01,13.51,48.334,12.835,47.503,12.835z M11.465,37.475 c-1.526,0-2.766-1.238-2.766-2.767s1.239-2.769,2.766-2.769c1.53,0,2.768,1.24,2.768,2.769S12.996,37.475,11.465,37.475z M31.796,39.735H17.215v-1.258h14.581V39.735z M31.796,37.225H17.215v-1.26h14.581V37.225z M31.796,34.708H17.215V33.45h14.581 V34.708z M31.796,32.194H17.215v-1.258h14.581V32.194z M24.505,26.356c-5.572,0-10.937-0.724-15.613-2.08v-7.729l2.463-11.647 h26.299l2.464,11.646v7.729C35.441,25.633,30.076,26.356,24.505,26.356z M37.545,37.475c-1.525,0-2.768-1.238-2.768-2.767 s1.24-2.769,2.768-2.769c1.529,0,2.768,1.24,2.768,2.769C40.311,36.237,39.073,37.475,37.545,37.475z"></path></g>
              </g>
            </svg>
            Bus
          </div>
          <div className="flex h-5 w-12 items-center justify-center gap-1 rounded bg-slate-300 text-xs font-bold text-slate-500">
            <svg fill="#64748b" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="-46.32 -46.32 555.87 555.87" stroke="#64748b">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g><path d="M418.193,245.165l-84.252,22.564l-32.476-18.734v-35.156l32.105-18.436l84.621,22.674c1.701,0.454,3.41,0.678,5.104,0.678 c8.692,0,16.646-5.805,18.995-14.598c2.815-10.508-3.415-21.307-13.922-24.119l-46.391-12.43l42.766-24.553 c9.426-5.414,12.688-17.449,7.273-26.879c-5.433-9.43-17.444-12.697-26.874-7.27l-42.854,24.611l12.427-46.407 c2.812-10.505-3.409-21.306-13.921-24.118c-10.442-2.739-21.285,3.422-24.101,13.92l-22.58,84.256l-32.306,18.553l-30.625-17.707 V124.86l61.931-61.93c7.688-7.692,7.688-20.151,0-27.844c-7.69-7.691-20.146-7.691-27.842,0l-34.089,34.088V19.688 C251.183,8.816,242.365,0,231.492,0c-10.871,0-19.688,8.815-19.688,19.688V68.93l-33.841-33.844c-7.691-7.691-20.15-7.691-27.843,0 c-7.691,7.692-7.691,20.151,0,27.844l61.684,61.683v37.544l-30.393,17.534l-32.306-18.536l-22.564-84.242 c-2.811-10.498-13.603-16.676-24.1-13.92C91.935,65.805,85.7,76.606,88.515,87.111l12.426,46.399l-42.852-24.604 c-9.447-5.428-21.472-2.168-26.878,7.275c-5.411,9.432-2.148,21.459,7.281,26.873l42.762,24.553l-46.392,12.43 c-10.507,2.812-16.74,13.611-13.926,24.119c2.355,8.793,10.307,14.598,19,14.598c1.693,0,3.403-0.224,5.109-0.678l84.632-22.682 l32.069,18.412l0.033,35.188l-32.486,18.768l-84.248-22.598c-10.433-2.738-21.291,3.43-24.109,13.924 c-2.814,10.504,3.419,21.306,13.926,24.103l46.222,12.397l-42.641,24.616c-9.413,5.441-12.643,17.472-7.199,26.886 c3.647,6.336,10.263,9.844,17.06,9.844c3.337,0,6.724-0.83,9.827-2.646l42.857-24.732l-12.473,46.577 c-2.815,10.522,3.42,21.29,13.926,24.119c1.701,0.461,3.41,0.679,5.104,0.679c8.689,0,16.641-5.814,18.996-14.613l22.676-84.605 l32.252-18.609l30.335,17.504v38.025l-61.684,61.685c-7.691,7.69-7.691,20.147,0,27.842c3.846,3.846,8.875,5.752,13.921,5.752 c5.029,0,10.076-1.906,13.922-5.752l33.841-33.842v49.225c0,10.892,8.817,19.689,19.688,19.689 c10.873,0,19.691-8.799,19.691-19.689v-49.471l34.089,34.088c3.845,3.846,8.874,5.752,13.921,5.752s10.076-1.906,13.921-5.752 c7.688-7.693,7.688-20.15,0-27.842l-61.931-61.931V300.76l30.595-17.658l32.243,18.609l22.676,84.605 c2.352,8.799,10.304,14.613,18.992,14.613c1.688,0,3.402-0.218,5.107-0.679c10.512-2.829,16.732-13.597,13.921-24.119 l-12.487-46.577l42.873,24.732c3.104,1.814,6.49,2.646,9.828,2.646c6.797,0,13.411-3.508,17.059-9.844 c5.443-9.414,2.215-21.443-7.199-26.886L382.15,295.59l46.221-12.398c10.507-2.797,16.737-13.6,13.922-24.102 C439.495,248.594,428.682,242.413,418.193,245.165z M262.087,248.995l-30.472,17.599l-30.45-17.6l-0.034-35.219l30.484-17.587 l30.472,17.613V248.995z"></path></g>
              </g>
            </svg>
            AC
          </div>
          <div className="ml-auto flex items-center justify-center rounded text-sm font-bold text-green-600">
            <svg fill="#16a34a" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.201 486.201" stroke="#16a34a">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M325.5,66.897c6.7-14.4,13.4-28.8,20.5-44.1c-78.2-32.9-154.4-31.3-227.4,12.1c-70.5,42-108.8,105.7-118.6,187.8 c16.8,1.5,32.6,2.8,48.4,4.2C57,102.897,194.1,7.797,325.5,66.897z"></path>
                    <path d="M482.7,201.697c-15.7,2.7-31.4,5.5-47.7,8.3c8.4,56.8-3.2,107.9-37.9,152.8c-34.5,44.6-80.6,69.1-137.1,75.4 c1.4,16,2.7,31.7,4.1,47.3C382.3,481.297,509,362.497,482.7,201.697z"></path>
                    <path d="M47.7,260.997c-15,1.3-30.7,2.7-46.4,4c3.6,99.1,90.1,210.6,220.5,221.2c1.4-16.1,2.8-31.7,4.1-47 C124,422.197,64.9,363.097,47.7,260.997z"></path>
                    <path d="M397.3,125.097c12.2,15.8,21.5,33,28.8,52.2c15.2-5.5,30.1-10.9,45.7-16.6c-18.1-48-47.5-86.2-89.2-116.2 c-9.3,13.2-18.4,26.2-27.9,39.8C370.8,95.997,385.2,109.397,397.3,125.097z"></path>
                    <path d="M397.3,243.097c0-85.2-69-154.2-154.2-154.2s-154.2,69-154.2,154.2s69,154.2,154.2,154.2S397.3,328.297,397.3,243.097z M287.4,303.897c-6.7,8.2-15.5,13.7-25.7,16.5c-4.5,1.2-6.5,3.6-6.2,8.2c0.2,4.5,0,9.1,0,13.7c0,4.1-2.1,6.2-6.1,6.3 c-2.6,0.1-5.2,0.1-7.8,0.1c-2.3,0-4.6,0-6.9-0.1c-4.3-0.1-6.3-2.5-6.4-6.7c0-3.3-0.1-6.7-0.1-10c-0.1-7.3-0.3-7.6-7.4-8.8 c-9-1.4-17.9-3.5-26.2-7.5c-6.5-3.2-7.2-4.8-5.3-11.6c1.4-5.1,2.8-10.1,4.4-15.2c1.2-3.7,2.2-5.3,4.2-5.3c1.1,0,2.6,0.5,4.6,1.6 c9.1,4.8,18.9,7.4,29,8.7c1.7,0.2,3.5,0.3,5.2,0.3c4.8,0,9.4-0.9,13.9-2.8c11.3-4.9,13.1-18.1,3.5-26c-3.3-2.7-7-4.7-10.8-6.4 c-9.9-4.4-20.3-7.7-29.7-13.3c-15.2-9.1-24.9-21.6-23.8-40.2c1.3-21,13.1-34,32.3-41c7.9-2.9,8-2.8,8-11.1c0-2.8,0-5.6,0-8.4 c0.2-6.2,1.2-7.3,7.4-7.5c0.7,0,1.4,0,2.2,0c1.2,0,2.4,0,3.6,0c0.5,0,1,0,1.4,0c11.8,0,11.8,0.5,11.9,13.2c0,9.4,0,9.4,9.4,10.9 c7.1,1.1,14,3.2,20.6,6.1c3.6,1.6,5,4.2,3.9,8c-1.7,5.7-3.2,11.5-5,17.1c-1.1,3.5-2.2,5-4.2,5c-1.1,0-2.5-0.5-4.3-1.4 c-9.2-4.4-18.7-6.6-28.7-6.6c-1.3,0-2.6,0-3.9,0.1c-3,0.2-5.9,0.6-8.7,1.8c-9.9,4.3-11.5,15.2-3.1,21.9c4.2,3.4,9.1,5.9,14.2,8 c8.7,3.6,17.5,7.1,25.8,11.7C298.9,248.097,306,281.297,287.4,303.897z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="ml-1">250 PKR</div>
          </div>
        </div>
      </div>
    </div>
  )
}