import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { VscBellDot, VscHome } from 'react-icons/vsc';

import Logo from '../../image/logo.png'
const SideBar = () => {
    return (
        <aside className='p-2 font-extrabold bg-white rounded-l-3xl inline-block'>
            <div className=' flex flex-col justify-between min-h-[95vh] '>
                <ul className='text-gray-400 text-[20px]'>
                    <li className='w-5 mb-3 hover:cursor-pointer'><img className='w-full' src={Logo} alt="" /></li>
                    <li className='mb-3 p-1 hover:cursor-pointer'><AiOutlineSearch /></li>


                    <li className='mb-3 mt-20 hover:cursor-pointer bg-indigo-600 rounded-md p-1 text-white'><VscHome /></li>
                    <li className='mb-3 hover:cursor-pointer p-1'><FaRegNewspaper /></li>
                    <li className='mb-3 hover:cursor-pointer p-1'><IoNewspaperOutline /></li>
                    <li className='mb-3 hover:cursor-pointer p-1'><BiUser /></li>
                </ul>
                <ul className='text-gray-400 text-[20px]'>
                    <li className='w-5 mb-3 hover:cursor-pointer p-1'><VscBellDot /></li>
                    <li className='mb-3 hover:cursor-pointer p-1'><FiLogOut /></li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;