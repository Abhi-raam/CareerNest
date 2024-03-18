import { BsBookmarkHeart } from "react-icons/bs";
import { FaLocationDot, FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from '.././Axios';
import { useCookies } from "react-cookie";
import { useAuth } from "../Context/AuthContext";
import Swal from "sweetalert2";

type jobCard = {
    id: number,
    image: string,
    title: string,
    type: string,
    vaccancies: number,
    package: string,
    experiance: number,
    description: string,
    qualification: any,
    responsibility: any,
    company: any

}
type JobCardProps = {
    job: jobCard;
    saved?: boolean
}
function JobCard({ job, saved }: JobCardProps) {
    const { user } = useAuth()
    const [token] = useCookies(["careerNest-token"]);

    const savedBtnClick = () => {
        Swal.fire({
            title: "Save the job",
            text: `do you want to save ${job?.title}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Don't Save",
            confirmButtonText: "Save"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("staff/job/save", { user_id: user.user_id, job_id: job.id }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `token ${token['careerNest-token']}`
                    }
                })
                Swal.fire({
                    title: "Saved!",
                    text: `You have save the job ${job?.title}`,
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='rounded-md bg-blue_third w-full lg:w-[25rem] h-[18rem] p-4 space-y-4'>
            <div className='flex justify-between '>
                <div className='flex space-x-3'>
                    <div>
                        <img src={`http://ashmiil.pythonanywhere.com/${job?.image}`} className='w-[2.5rem] rounded-md' alt="" />
                    </div>
                    <div className='items-center'>
                        <h2 className='font-semibold'>{job?.company.company.username}</h2>
                        <p className='font-semibold text-xs flex items-center '>
                            <FaLocationDot />
                            Bangalore
                        </p>
                    </div>
                </div>
                <div>
                    <BsBookmarkHeart className={`text-3xl cursor-pointer hover:scale-105 transition font-semibold ${saved ? 'text-green-600' : null} `} onClick={savedBtnClick} />
                </div>
            </div>
            <div className='space-y-3'>
                <div>
                    <h3 className='font-bold'>{job?.title}</h3>
                    <h4 className='text-xs font-semibold capitalize'>Exp {job?.experiance} Year - {job?.type}</h4>
                </div>
                <div>
                    <p className='font-semibold text-xs'>{job?.description}</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='flex items-center space-x-2'><FaIndianRupeeSign /> <span className='font-medium'>{job?.package}LPA</span></h3>
                <Link to={`/jobs/${job?.id}`}>
                    <h3 className='bg-blue_secondary text-blue_main rounded-full p-1 px-3 cursor-pointer text-xs font-semibold transition hover:scale-105'>KNOW MORE</h3>
                </Link>
            </div>
        </div>
    )
}

export default JobCard