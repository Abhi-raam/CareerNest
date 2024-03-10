import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../Pages/User/UserHome";
import UserLogin from "../Pages/User/UserLogin";
import UserNavbar from "../Components/User/UserNavbar";
import UserProfile from "../Pages/User/UserProfile";
import UserJobs from "../Pages/User/UserJobs";

function UserRouter() {
  return (
    <div>
        <UserNavbar/>
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/jobs" element={<UserJobs />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<UserLogin />} />
        </Routes>
    </div>
  );
}

export default UserRouter;
