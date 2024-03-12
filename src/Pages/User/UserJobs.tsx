import JobCard from '../../Components/JobCard'

function UserJobs() {
    return (
        <div className=''>
             <div className="pt-5">
                <h2 className="text-center text-2xl font-semibold">All Jobs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center pt-5 pb-5 px-2">
                <JobCard name={"Python"}jobId='1'/>
                <JobCard name={"Python"}jobId='2' />
                <JobCard name={"Python"}jobId='3' />
                <JobCard name={"Python"}jobId='4' />
                <JobCard name={"Python"}jobId='5' />
                <JobCard name={"Python"}jobId='6' />
                <JobCard name={"Python"}jobId='7' />
                <JobCard name={"Python"}jobId='8' />
                <JobCard name={"Python"}jobId='9' />
                <JobCard name={"Python"}jobId='10' />
            </div>
        </div>
    )
}

export default UserJobs