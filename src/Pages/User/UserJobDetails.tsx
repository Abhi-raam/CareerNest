import { useCookies } from 'react-cookie';
import { MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from '../../Axios';
import { useParams } from 'react-router-dom';
import JobCard from '../../Components/JobCard';

function UserJobDetails() {
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState<any>();
  const [token] = useCookies(["careerNest-token"]);
  const { id } = useParams()

  useEffect(() => {
    axios.get(`staff/job/more/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${token['careerNest-token']}`
      }
    }).then((response) => {
      setJobDetails(response.data);
      console.log(response.data);
    })

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


  const applyBtnClick =()=>{
    axios.post('staff/job/apply-job',{ job_id: jobDetails?.id, user_id:1 }, {
      headers: {'Content-Type': 'application/json','Authorization': `token ${token['careerNest-token']}`}
    }).then(() => {
      console.log("Applied to job with id" + id);
    })
    
  }
  return (
    <div className="grid lg:grid-cols-3 justify-items-center ">
      <div className=" lg:col-span-2  w-full p-2 px-10 pt-5 pb-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{jobDetails?.title}</h2>
          <button className="p-1 px-3 rounded-md bg-blue-500 hover:bg-blue-600 outline-none border-0 text-white font-semibold" onClick={applyBtnClick}>Apply</button>
        </div>
        <div className='flex pt-4'>
          <div className='items-center flex'>
            <img src={`http://ashmiil.pythonanywhere.com/${jobDetails?.image}`} className='w-[3rem] md:w-[4rem] lg:w-[4rem]' alt="" />
          </div>
          <div className='flex-row items-center lg:pt-3 space-y-2 pl-4'>
            <div className=' space-y-1 w-[15rem] md:w-[20rem] lg:w-[25rem]'>
              <h2 className='font-semibold text-lg'>{jobDetails?.company.company.username}</h2>
              <h2 className='flex items-center gap-2 text-gray-600'><MdOutlineLocationOn /> <span className='text-xs font-medium '>Chennai, Tamil Nadu</span></h2>
            </div>
            <div className='flex space-x-2 text-xs w-full'>
              <h4 className='bg-gray-300 p-1 px-2 lg:px-4 rounded-full font-medium capitalize'>Fulltime</h4>
              <h4 className='bg-gray-300 p-1 px-2 lg:px-4 rounded-full font-medium capitalize'>{jobDetails?.type}</h4>
              <h4 className='bg-gray-300 p-1 px-2 lg:px-4 rounded-full font-medium capitalize'>{jobDetails?.experiance} years</h4>
            </div>
          </div>
        </div>

        <div className='pt-8 space-y-7'>
          <div>
            <h2 className='font-semibold'>About this role</h2>
            <p className='text-sm pt-3 text-gray-700 font-medium text-justify'>
              {jobDetails?.description}
            </p>
          </div>

          <div>
            <h2 className='font-semibold'>Qualifications</h2>
            <ul className="list-disc text-sm pt-3 text-gray-700 font-medium list-outside px-4">
              {Object.keys(jobDetails?.qualifications || {}).map((key: string, index: number) => (
                <li key={index}>{jobDetails?.qualifications[key]}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='font-semibold'>Responsibility</h2>
            <ul className="list-disc text-sm pt-3 text-gray-700 font-medium list-outside px-4">
              {Object.keys(jobDetails?.responsibility || {}).map((key: string, index: number) => (
                <li key={index}>{jobDetails?.responsibility[key]}</li>
              ))}
            </ul>
          </div>


        </div>
      </div>
      <div className=" w-full hidden lg:block pt-5">
        <div>
          <h2 className='text-lg font-medium text-center'>Similar Jobs</h2>
        </div>
        <div className='grid grid-cols-1 justify-items-center gap-4 overflow-y-scroll h-[85vh] scrollbar-hidden pb-4'>
        {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default UserJobDetails