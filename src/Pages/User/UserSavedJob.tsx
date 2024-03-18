import { useEffect, useState } from "react";
import axios from '../../Axios';
import { useCookies } from "react-cookie";
import JobCard from "../../Components/JobCard";

function UserSavedJob() {
    const [token] = useCookies(["careerNest-token"]);
    const [savedJobs,setSavedJobs] = useState<any>()
    useEffect(() => {
        axios.get("staff/job/save", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token['careerNest-token']}`
          }
        }).then((response) => {
            setSavedJobs(response.data);
            console.log(response.data);
            
    
        })
    
      }, [token]);
    return (
        <div className=' h-screen'>
            <div className="pt-5">
                <h2 className="text-center text-2xl font-semibold">Saved Jobs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center pt-5 pb-5 px-2 ">
            {savedJobs?.map((job:any, index:number) => (
                <JobCard key={index} job={job.job} saved={true} />
            ))}
            </div>
        </div>
    )
}

export default UserSavedJob