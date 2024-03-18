import JobCard from "../../Components/JobCard";
import axios from '../../Axios';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function UserJobTab() {
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
            // console.log(response.data);
            
        }).catch(error => {
            console.error('Error fetching jobs:', error);
        });
    }, [token]); // Add token to dependency array to trigger effect when token changes

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:h-[76vh] overflow-y-scroll scrollbar-hidden justify-items-center'>
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
    );
}

export default UserJobTab;
