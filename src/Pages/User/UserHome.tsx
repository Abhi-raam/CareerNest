import JobCard from '../../Components/JobCard'
import './UserHome.css'
function UserHome() {
  return (
    <div className='grid lg:grid-cols-4 justify-items-center  lg:h-[91vh]'>
      <div className=' grid md:grid-cols-2 col-span-3 gap-10 lg:h-[88vh] overflow-y-scroll scrollbar-hidden pb-3 px-2 pt-4'>
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
      <div className='hidden lg:block'>news card</div>
    </div>
  )
}

export default UserHome