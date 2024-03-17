import JobCard from '../../Components/JobCard'
import axios from '../../Axios';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
function UserJobs() {
    const [jobs, setJobs] = useState([]); // Initialize jobs as an empty array
    const [token] = useCookies(["careerNest-token"]);
    useEffect(() => {
        axios.get('/staff/job', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${token['careerNest-token']}`
            }
        }).then((response) => {
            setJobs(response.data);
            console.log(response.data);
            
        }).catch(error => {
            console.error('Error fetching jobs:', error);
        });
    }, [token]);
    return (
        <div className=''>
             <div className="pt-5">
                <h2 className="text-center text-2xl font-semibold">All Jobs</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center pt-5 pb-5 px-2">
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
            </div>
        </div>
    )
}

export default UserJobs