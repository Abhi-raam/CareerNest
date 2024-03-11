import JobCard from '../../Components/JobCard'
import UserNewsCard from '../../Components/User/UserNewsCard'
import UserProfileCard from '../../Components/User/UserProfileCard'
import './UserHome.css'
function UserHome() {
  return (
    // <div className='grid grid-cols-1 lg:grid-cols-3  lg:h-[91vh] '>
    <div className='flex justify-evenly  '>
      {/* <div className=' grid grid-cols-1 md:grid-cols-2 col-span-full lg:col-span-2  gap-3 lg:h-[91vh] overflow-y-scroll scrollbar-hidden pb-3 px-4 pt-4 '> */}
      {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-[91vh] overflow-y-scroll scrollbar-hidden pb-3 px-4 pt-4 '>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div> */}
      <div className='hidden lg:block pt-12 px-2 '>
        <div><UserProfileCard /></div>
        <div><UserNewsCard /></div>
      </div>
      <div className='p-4'>
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Jobs" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[76vh] overflow-y-scroll scrollbar-hidden'>
              <JobCard name={"JavaScript"} />
              <JobCard name={"Dart"} />
              <JobCard name={"Java"} />
              <JobCard name={"C++"} />
              <JobCard name={"javaScript"} />
              <JobCard name={"javaScript"} />
              <JobCard name={"javaScript"} />
              <JobCard name={"javaScript"} />
              <JobCard name={"javaScript"} />
            </div>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Internship" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[76vh] overflow-y-scroll scrollbar-hidden'>
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
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Courses" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[76vh] overflow-y-scroll scrollbar-hidden '>
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
          </div>
        </div>
      </div>

      {/* <div className='hidden lg:block pt-12 px-2 '>
        <div><UserProfileCard /></div>
        <div><UserNewsCard /></div>
      </div> */}
    </div>
  )
}

export default UserHome