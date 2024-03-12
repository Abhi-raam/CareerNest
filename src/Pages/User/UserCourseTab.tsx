import JobCard from "../../Components/JobCard"

function UserCourseTab() {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:h-[76vh] overflow-y-scroll scrollbar-hidden justify-items-center'>
            <JobCard name={"RUBY"} />
            <JobCard name={"Kotlin"} />
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

export default UserCourseTab