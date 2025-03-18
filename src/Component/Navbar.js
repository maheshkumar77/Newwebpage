import React from 'react';
import { GiPoolTriangle } from "react-icons/gi";
import { IoIosChatbubbles } from "react-icons/io";
import { MdMoveToInbox, MdPayments, MdHeadsetMic } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaPeriscope } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { icon: <GiPoolTriangle />, label: "Talent Pool" },
    { icon: <IoIosChatbubbles />, label: "Chat" },
    { icon: <FaPeriscope />, label: "Scope" },
    { icon: <MdPayments />, label: "Payments" },
    { icon: <MdMoveToInbox />, label: "Inbox" },
  ];

  return (
    <div className='h-screen w-10 flex flex-col justify-between shadow-md ml-2 rounded-sm z-10'>
      <nav className='w-full flex flex-col items-center justify-center px-6 py-3 bg-white gap-6'>
        {/* Logo or Brand */}
        <div className='flex items-center justify-center h-10 w-10 bg-blue-500 text-white font-bold text-lg rounded-md shadow-sm mb-4'>
          M
        </div>
        
        {/* Navigation Icons */}
        <div className='flex flex-col gap-4'>
          {navItems.map((item, index) => (
            <div key={index} className='group relative flex justify-center'>
              <div className='text-2xl text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer'>
                {item.icon}
              </div>
              <span className='absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md'>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </nav>
      
      <div className='flex flex-col gap-4 pb-8 justify-center items-center'>
        <div className='group relative flex justify-center'>
          <CiSettings className='text-2xl text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer' />
          <span className='absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md'>
            Settings
          </span>
        </div>
        <div className='group relative flex justify-center'>
          <MdHeadsetMic className='text-2xl text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer' />
          <span className='absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md'>
            Contact
          </span>
        </div>
        <div className='flex items-center justify-center h-10 w-10 bg-blue-500 text-white font-bold text-lg rounded-full shadow-sm mb-4'>
          A
        </div>
      </div>
    </div>
  );
};

export default Navbar;
