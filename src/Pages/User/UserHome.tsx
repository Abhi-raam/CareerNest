import UserNewsCard from '../../Components/User/UserNewsCard'
import { useAuth } from '../../Context/AuthContext'
import UserCourseTab from './UserCourseTab'
// import UserProfileCard from '../../Components/User/UserProfileCard'
import './UserHome.css'
import UserInternshipTab from './UserInternshipTab'
import UserJobTab from './UserJobTab'
function UserHome() {
  const {authUser} = useAuth()
  return (
    <div className='flex justify-evenly  '>
      <div className='hidden lg:block pt-16 px-2 '>
        <div><UserNewsCard /></div>
      </div>
      <div className='p-4'>
        <div role="tablist" className="tabs tabs-lifted">

          <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Jobs" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
            <UserJobTab />
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Internship" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <UserInternshipTab/>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Courses" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
           <UserCourseTab/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHome