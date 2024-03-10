import React from 'react'
import JobCard from '../../Components/JobCard'

function UserHome() {
  return (
    <div className='grid grid-cols-4 justify-items-center pt-5 h-[91vh]'>
      <div className=' grid grid-cols-2 col-span-3 gap-10 h-[88vh] overflow-y-scroll  pb-2'>
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
      <div>news card</div>
    </div>
  )
}

export default UserHome