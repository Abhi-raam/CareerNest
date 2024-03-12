import JobCard from "../../Components/JobCard"

function UserInternshipTab() {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:h-[76vh] overflow-y-scroll scrollbar-hidden justify-items-center'>
            <JobCard name={"C#"} />
            <JobCard name={"Python"} />
            <JobCard name={"Java"} />
            <JobCard name={"C++"} />
            <JobCard name={"javaScript"} />
            <JobCard name={"javaScript"} />
            <JobCard name={"javaScript"} />
            <JobCard name={"javaScript"} />
            <JobCard name={"javaScript"} />
        </div>
    )
}

export default UserInternshipTab