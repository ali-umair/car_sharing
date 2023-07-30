import { React, useEffect} from 'react';
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
    <div className='w-2/3 bg-indigo-900 bg-opacity-50 flex flex-col justify-center mt-5 mb-5 pt-5 rounded-lg border-2 border-gray-700'>
        <div className='flex items-center justify-evenly px-5'>
           <div className='flex items-center'>
              <IconContext.Provider value={{style: {color: '#6B75DB', fontSize: '25px' }}}>
                  <FaCarSide />
              </IconContext.Provider>
              <p className='text-indigo-200 text-base font-bold ml-3 mr-3'>{props.doc.pickup_location}</p>
              <IconContext.Provider value={{style: {color: '#6B75DB', fontSize: '25px'}}}>
                  <FaLongArrowAltRight />
              </IconContext.Provider>
              <p className='text-indigo-200 text-base font-bold ml-3 mr-18'>{props.doc.dropoff_location}</p>
           </div>
            <div className='flex items-center'>
              <IconContext.Provider value={{style: {color: '#6B75DB', fontSize: '25px'}}}>
                  <FaRegMoneyBillAlt />
              </IconContext.Provider>
              <p className='text-indigo-200 text-base font-bold ml-3 mr-14'>Rs. {props.doc.fare}/-</p>
            </div>
            <div className='flex items-center'>
              <IconContext.Provider value={{style: {color: '#6B75DB', fontSize: '25px'}}}>
                  <FaRegCalendarCheck />
              </IconContext.Provider>
              <p className='text-indigo-200 text-base font-bold ml-3 mr-14'>{props.doc.date}</p>
            </div>
            <div className='flex items-center'>
              <IconContext.Provider value={{style: {color: '#6B75DB', fontSize: '25px'}}}>
                  <FaRegClock />
              </IconContext.Provider>
              <p className='text-indigo-200 text-base font-bold ml-3 mr-14'>{props.doc.time}</p>
            </div>
        </div>
        <div id='angle-down' className='h-5 my-3 mx-auto text-center click:rotate-180 hover:cursor-pointer' onClick={rotate}>
          <IconContext.Provider value={{style: {color: '#6B75DB', fontSize: '25px' }}}>
            <FaAngleDown />
          </IconContext.Provider>
        </div>
    </div>
  )
}
