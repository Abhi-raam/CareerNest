import React from 'react'
import js from '../assets/javascript.png'
import { FaLocationDot,FaIndianRupeeSign  } from "react-icons/fa6";
import { BsBookmarkPlus } from "react-icons/bs";


function JobCard() {
    return (
        <div className='rounded-md bg-blue_third w-[25rem] h-[14rem] p-4 space-y-4'>
            <div className='flex justify-between '>
                <div className='flex space-x-3'>
                    <div>
                        <img src={js} className='w-[2rem]' alt="" />
                    </div>
                    <div className='items-center'>
                        <h2 className='font-semibold'>JavaScript</h2>
                        <p className='font-semibold text-xs flex items-center '>
                            <FaLocationDot />
                            Bangalore
                        </p>
                    </div>
                </div>
                <div>
                    <BsBookmarkPlus className='text-2xl cursor-pointer hover:scale-105 transition' />
                </div>
            </div>
            <div className='space-y-3'>
                <div>
                    <h3 className='font-bold'>Sr. UI/UX Designer</h3>
                    <h4 className='text-xs font-semibold'>Exp 6 - 10 Year - Fulltime</h4>
                </div>
                <div>
                    <p className='font-semibold text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='flex items-center space-x-2'><FaIndianRupeeSign /> <span>400K - 600K</span></h3>
                <h3 className='bg-blue_secondary text-blue_main rounded-full p-1 px-3 cursor-pointer text-xs font-semibold transition hover:scale-105'>CONTACT</h3>
            </div>
        </div>
    )
}

export default JobCard