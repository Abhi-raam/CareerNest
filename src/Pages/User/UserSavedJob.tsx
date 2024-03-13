import JobCard from "../../Components/JobCard"

function UserSavedJob() {
    return (
        <div className=' h-screen'>
            <div className="pt-5">
                <h2 className="text-center text-2xl font-semibold">Saved Jobs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center pt-5 pb-5 px-2 ">
                <JobCard name={"JavaScript"} status={true} />
                <JobCard name={"NodeJs"} status={true} />
                <JobCard name={"ReactJs Developer"} status={true} />
                <JobCard name={"Web Designing"} status={true} />
                <JobCard name={"Android Developer"} status={true} />
                <JobCard name={"UI/Ux Designer"} status={true} />
            </div>
        </div>
    )
}

export default UserSavedJob