import React, { useState } from 'react';
import logo from '../../../assets/travel logo.png'
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='p-4 md:px-28 md:py-6 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
                <img className='w-20 h-16 md:w-28 md:h-24' src={logo} alt="" />
                <h3 className='text-xl md:text-3xl font-bold'>Tour-Trips Holidays</h3>
            </div>
            <div>
                <div onClick={()=> setOpen(!open)}>
                    {
                        (open ? <HiOutlineX className='md:hidden'></HiOutlineX> : <HiMenuAlt3 className='md:hidden'></HiMenuAlt3>)
                    }
                </div>
                <ul className={`md:inline-flex absolute md:static duration-300 ${open ? 'top-16 left-0 right-0 ps-10' : '-top-48 left-0 right-0 ps-10'} md:space-x-8 py-4`}>
                    <li className='text-xl font-medium'><Link>Destination</Link></li>
                    <li className='text-xl font-medium'><Link>Hotels</Link></li>
                    <li className='text-xl font-medium'><Link>Rooms</Link></li>
                    <li className='text-xl font-medium'><Link>Contacts</Link></li>
                    <Link><button className='bg-yellow-600 px-4 py-2 rounded-md text-white'>Login</button></Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;