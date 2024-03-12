import { Route, Routes } from "react-router-dom";
import UserHome from "../Pages/User/UserHome";
import UserLogin from "../Pages/User/UserLogin";
import UserNavbar from "../Components/User/UserNavbar";
import UserProfile from "../Pages/User/UserProfile";
import UserJobs from "../Pages/User/UserJobs";
import UserSavedJob from "../Pages/User/UserSavedJob";
import UserAppliedJobs from "../Pages/User/UserAppliedJobs";
import UserJobDetails from "../Pages/User/UserJobDetails";

function UserRouter() {
  return (
    <div>
        <UserNavbar/>
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/jobs" element={<UserJobs />} />
            <Route path="/jobs/:id" element={<UserJobDetails />} />
            <Route path="/saved" element={<UserSavedJob />} />
            <Route path="/applied" element={<UserAppliedJobs />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<UserLogin />} />
        </Routes>
    </div>
  );
}

export default UserRouter;
