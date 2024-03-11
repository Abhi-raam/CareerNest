import profilePic from '../../assets/profilepic.jpeg'
function UserProfileCard() {
  return (
    <div className="shadow-lg bg-white rounded-xl  w-[15rem] cursor-pointer">
        <div className="bg-blue_third flex justify-center h-[8rem] items-center rounded-t-xl ">
            <img src={profilePic} className='rounded-full w-[5rem] hover:scale-105 transition overflow-hidden' alt="" />
        </div>
        <div>
            <div>
                <h2 className='text-center text-xl font-semibold'>Steve Rogers</h2>
            </div>
            <div className='whitespace-pre-wrap px-3 h-[15rem] flex flex-col justify-between pt-5 text-sm'>
                <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Dept   </span>     :  <span>CSE</span></h2>
                <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Reg No.</span>   :  <span>963820104000</span></h2>
                <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>DOB      </span>  :  <span>01 Jan 2000</span></h2>
                <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Mobile </span>   :  <span>+91 9999999999</span></h2>
                <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Email  </span>     :  <span>sample@gmail.com</span></h2>
                <h2 className='font-semibold border-b-2 border-blue-100'> <span className='text-gray-700'>Address</span>   :  <span>City,Kerala,India</span></h2>
            </div>
        </div>
    </div>
  )
}

export default UserProfileCard