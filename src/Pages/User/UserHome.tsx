import JobCard from '../../Components/JobCard'
import UserNewsCard from '../../Components/User/UserNewsCard'
import UserProfileCard from '../../Components/User/UserProfileCard'
import './UserHome.css'
function UserHome() {
  return (
    // <div className='grid grid-cols-1 lg:grid-cols-3  lg:h-[91vh] '>
    <div className='flex justify-evenly  lg:h-[91vh] '>
      {/* <div className=' grid grid-cols-1 md:grid-cols-2 col-span-full lg:col-span-2  gap-3 lg:h-[91vh] overflow-y-scroll scrollbar-hidden pb-3 px-4 pt-4 '> */}
      <div className='grid md:grid-cols-2 gap-4 lg:h-[91vh] overflow-y-scroll scrollbar-hidden pb-3 px-4 pt-4 '>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div>
      <div className='hidden lg:block pt-4 px-2 '>
        <div><UserProfileCard/></div>
        <div><UserNewsCard/></div>
      </div>
    </div>
  )
}

export default UserHome