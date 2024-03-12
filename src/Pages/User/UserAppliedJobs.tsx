
function UserAppliedJobs() {
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
            <tr className="">
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Pending</td>
              <td><button className="p-2 rounded-md font-semibold bg-red-500 hover:bg-red-600 text-white">Cancel</button></td>
            </tr>
            {/* row 2 */}
            <tr className="">
              <td>2</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Approved</td>
             <td><button className="p-2 rounded-md font-semibold bg-red-500 hover:bg-red-600 text-white">Cancel</button></td>
            </tr>
            {/* row 3 */}
            <tr className="">
              <td>3</td>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Rejected</td>
              <td><button className="p-2 rounded-md font-semibold bg-red-500 hover:bg-red-600 text-white">Cancel</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAppliedJobs