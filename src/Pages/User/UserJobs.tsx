import React from 'react'
import JobCard from '../../Components/JobCard'

function UserJobs() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 justify-items-center pt-5 pb-5">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default UserJobs