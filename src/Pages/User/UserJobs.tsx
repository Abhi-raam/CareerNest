import JobCard from '../../Components/JobCard'

function UserJobs() {
    return (
        <div className=' '>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center pt-5 pb-5 px-2">
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