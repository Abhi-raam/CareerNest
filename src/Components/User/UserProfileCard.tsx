import profilePic from '../../assets/profilepic.jpeg'
import { FiPlus } from "react-icons/fi";
import { PiHeartStraightThin } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
function UserProfileCard() {
    return (
        // <div className="shadow-lg bg-white rounded-xl  w-[15rem] cursor-pointer">
        //     <div className="bg-blue_third flex justify-center h-[8rem] items-center rounded-t-xl ">
        //         <img src={profilePic} className='rounded-full w-[5rem] hover:scale-105 transition overflow-hidden' alt="" />
        //     </div>
        //     <div>
        //         <div>
        //             <h2 className='text-center text-xl font-semibold'>Steve Rogers</h2>
        //         </div>
        //         <div className='whitespace-pre-wrap px-3 h-[15rem] flex flex-col justify-between pt-5 text-sm'>
        //             <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Dept   </span>     :  <span>CSE</span></h2>
        //             <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Reg No.</span>   :  <span>963820104000</span></h2>
        //             <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>DOB      </span>  :  <span>01 Jan 2000</span></h2>
        //             <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Mobile </span>   :  <span>+91 9999999999</span></h2>
        //             <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Email  </span>     :  <span>sample@gmail.com</span></h2>
        //             <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Address</span>   :  <span>City,Kerala,India</span></h2>
        //         </div>
        //     </div>
        // </div>
        <div className='flex justify-center'>
            <div className='' >
                <div>
                    <img src={profilePic} className='w-[15rem] rounded-t-md' alt="" />
                </div>
                <div className='bg-white rounded-b-md relative '>
                    <div className='flex justify-end p-1 absolute right-0 bottom-[90%]'>
                        <FiPlus className='bg-yellow-500 text-3xl p-1  rounded-full cursor-pointer shadow-md hover:scale-105 transition' />
                    </div>
                    <div className='text-center pt-6 '>
                        <h1 className='text-xl font-semibold'>Steve Rogers</h1>
                        <div className='text-sm flex justify-between px-3 pt-3'>
                            <h4 className='flex items-center gap-2 font-semibold'><PiHeartStraightThin />Software Developer</h4>
                            <h4 className='flex items-center gap-2 font-semibold'><TfiLocationPin />Kerala</h4>
                        </div>
                    </div>
                    <div className='flex mt-10 justify-evenly pb-5'>
                        <h2 className='text-xl font-semibold'>45K</h2>
                        <h2 className='text-xl font-semibold'>45K</h2>
                        <h2 className='text-xl font-semibold'>45K</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard