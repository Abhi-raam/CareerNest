import { Link } from "react-router-dom";
import UserNews from "./UserNews";

function UserNewsCard() {
  return (
    <div className="bg-white  rounded-md lg:w-[25rem] p-3">
      <div className="px-3">
        <h2 className="text-xl font-semibold">What's Happening</h2>
      </div>
      <div>
        <Link to='/jobs'>
          <UserNews/>
        </Link>
        <Link to='/jobs'>
          <UserNews/>
        </Link>
        <Link to='/jobs'>
          <UserNews/>
        </Link>
        <Link to='/jobs'>
          <UserNews/>
        </Link>
        <Link to='/jobs'>
          <UserNews/>
        </Link>
      </div>
    </div>
  )
}

export default UserNewsCard