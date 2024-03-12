import js from '../assets/javascript.png'
import { BsBookmarkHeart } from "react-icons/bs";
import { FaLocationDot, FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

type jobCard = {
    name: string,
    jobId?: string,
    status?: boolean
}
function JobCard({ name, status, jobId }: jobCard) {
    return (
        <div className='rounded-md bg-blue_third lg:w-[25rem] h-[14rem] p-4 space-y-4'>
            <div className='flex justify-between '>
                <div className='flex space-x-3'>
                    <div>
                        <img src={js} className='w-[2rem]' alt="" />
                    </div>
                    <div className='items-center'>
                        <h2 className='font-semibold'>{name}</h2>
                        <p className='font-semibold text-xs flex items-center '>
                            <FaLocationDot />
                            Bangalore
                        </p>
                    </div>
                </div>
                <div>
                    <BsBookmarkHeart className={`text-3xl cursor-pointer hover:scale-105 transition font-semibold ${status ? "text-green-600" : null}`} />
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
                <h3 className='flex items-center space-x-2'><FaIndianRupeeSign /> <span className='font-medium'>400K - 600K</span></h3>
                <Link to={`/jobs/${jobId}`}>
                    <h3 className='bg-blue_secondary text-blue_main rounded-full p-1 px-3 cursor-pointer text-xs font-semibold transition hover:scale-105'>KNOW MORE</h3>
                </Link>
            </div>
        </div>
    )
}

export default JobCard