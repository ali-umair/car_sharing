import React from 'react';
import './cardNew.css';
import DataField from "./DataField";

export default function CardNew(props: any) {
    const showDetails = () => {
        const details = document.querySelector('.flight-card--details');
        if(details && details.classList.contains("hidden"))
            details?.classList.remove("hidden");
        else details?.classList.add("hidden");
    }
  return (
    <div className='flight-card'>
    <div className='flight-card--header' onClick={showDetails}>
        <div className='flight-card--header-logo'>
        <img src='https://companieslogo.com/img/orig/JBLU_BIG.D-961bb4f8.png?t=1650192342' />
        </div>
        <div className='flight-card--header-details'>
        <div className='details-passenger'>
            <span className='detail--title'>
            Passenger
            </span>
            <span className='detail--text'>
            James Macpherson
            </span>
        </div>
        <div className='details-depart'>
            <span className='detail--title'>
            Departs
            </span>
            <span className='detail--text'>
            Apr 2, 2017
            </span>
        </div>
        <div className='details-arrive'>
            <span className='detail--title'>
            Arrives
            </span>
            <span className='detail--text'>
            Apr 3, 2017
            </span>
        </div>
        </div>
    </div>
    <div className='flight-card--details'>
        <div className='bc-from'>
        <span className='detail-code'>
            SFO
        </span>
        <span className='detail-city'>
            San Francisco, California
        </span>
        </div>
        <div className='bc-plane'>
        <img src='https://cdn.onlinewebfonts.com/svg/img_537856.svg' />
        </div>
        <div className='bc-to'>
        <span className='detail-code'>
            PVD
        </span>
        <span className='detail-city'>
            Providence, Rhode Island
        </span>
        </div>
        <div className='flight-card-details--text'>
        <div className='text-left'>
            <span className='text-hline'>
            Operator
            </span>
            <span className='text-actual'>
            Jetblue Airways
            </span>
        </div>
        <div className='text-middle'>
            <span className='text-hline'>
            Flight
            </span>
            <span className='text-actual'>
            B6 843
            </span>
        </div>
        <div className='text-right'>
            <span className='text-hline'>
            Class
            </span>
            <span className='text-actual mint'>
            Mint
            </span>
        </div>
        </div>
        <div className='flight-card-details--admin'>
        <div className='admin-left'>
            PVD-SFO FUN 2017 - A321
        </div>
        <div className='admin-right'>
            SEA1F MOSAIC
        </div>
        </div>
    </div>
    </div>

  )
}
