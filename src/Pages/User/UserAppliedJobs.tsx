import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from '../../Axios';

function UserAppliedJobs() {
  const [token] = useCookies(["careerNest-token"]);
  const [appliedJobs, setAppliedJobs] = useState<any>()
  useEffect(() => {
    axios.get("staff/job/apply-job", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${token['careerNest-token']}`
      }
    }).then((response) => {
      setAppliedJobs(response.data);

    })

  }, [token]);
  return (
    <div className="h-screen">
      <div className="pt-4">
        <h2 className="text-center font-semibold text-xl">Applied job details</h2>
      </div>
      <div className="overflow-x-auto p-3 pt-4">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center text-base">
            <tr>
              <th>S No.</th>
              <th>Company Name</th>
              <th>Job Name</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            {appliedJobs?.map((appliedjob: any, index: number) => (
              <tr className="font-medium capitalize">
                <td>{index + 1}</td>
                <td>{appliedjob.job.company.company.username}</td>
                <td>{appliedjob?.job.title}</td>
                <td>{appliedjob?.status}</td>
                <td><button className={`p-2 rounded-md font-semibold bg-red-500  text-white btn ${appliedjob.status === "approved"? 'hover:bg-gray-500 btn-disabled cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white' }`}>Cancel</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAppliedJobs