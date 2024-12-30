import React from 'react'
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header>
        <div className="flex items-center header-bg-color justify-between py-[10px] px-[2%]">
            <div className='flex items-center'>
                <FiMenu className='icon m-1'/>
                <span className='text-[17px]'>MENYU</span>
            </div>
            <div className='logo'>
                <img src="https://muse.az/wp-content/uploads/2022/12/musegoldlogo-03-1400x534.png.webp" className="header-logo-dark p-[15px] w-[150px] m-auto " alt="Muse"/>

            </div>
            <div className='flex'>
                <FaUser className='icon mx-2'/>
                <hr />
                <GiShoppingBag className='icon'/>
            </div>
        </div>
        <div className='under_header'>
            <p className='text'> 100 AZN üzəri sifarişlərdə Pulsuz Çatdırılma!</p>
        </div>
    </header>
    
    
  )
}

export default Header