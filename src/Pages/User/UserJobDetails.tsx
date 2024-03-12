import JobCard from '../../Components/JobCard';
import javaScript from '../../assets/javascript.png'
import { MdOutlineLocationOn } from "react-icons/md";

function UserJobDetails() {
  return (
    <div className="grid lg:grid-cols-3 justify-items-center ">
      <div className=" lg:col-span-2  w-full p-2 px-10 pt-5 pb-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">UI/UX Designer</h2>
          <button className="p-1 px-3 rounded-md bg-blue-500 hover:bg-blue-600 outline-none border-0 text-white font-semibold ">Apply</button>
        </div>
        <div className='flex pt-4'>
          <div className='items-center flex'>
            <img src={javaScript} className='w-[3rem] md:w-[4rem] lg:w-[4rem]' alt="" />
          </div>
          <div className='flex-row items-center lg:pt-3 space-y-2 pl-4'>
            <div className=' space-y-1 w-[15rem] md:w-[20rem] lg:w-[25rem]'>
              <h2 className='font-semibold text-lg'>ZOHO</h2>
              <h2 className='flex items-center gap-2 text-gray-600'><MdOutlineLocationOn /> <span className='text-xs font-medium '>Chennai, Tamil Nadu</span></h2>
            </div>
            <div className='flex space-x-2 text-xs w-full'>
              <h4 className='bg-gray-300 p-1 px-2 lg:px-4 rounded-full font-medium'>Fulltime</h4>
              <h4 className='bg-gray-300 p-1 px-2 lg:px-4 rounded-full font-medium'>Remote</h4>
              <h4 className='bg-gray-300 p-1 px-2 lg:px-4 rounded-full font-medium'>02 - 04 years</h4>
            </div>
          </div>
        </div>

        <div className='pt-8 space-y-7'>
          <div>
            <h2 className='font-semibold'>About this role</h2>
            <p className='text-sm pt-3 text-gray-700 font-medium text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>

          <div>
            <h2 className='font-semibold'>Qualifications</h2>
            <ul className="list-disc text-sm pt-3 text-gray-700 font-medium list-outside px-4">
              <li>Experience working with web applications using React.js. </li>
              <li>In-depth knowledge of JavaScript, CSS, HTML, and front-end languages. </li>
              <li>Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux. </li>
              <li>Experience with browser-based debugging with troubleshooting skills.</li>
            </ul>
          </div>

          <div>
            <h2 className='font-semibold'>Responsibility</h2>
            <ul className="list-disc text-sm pt-3 text-gray-700 font-medium list-outside px-4">
              <li>Bachelor's/master's degree in computer science/IT/EC with 2+ years of industry experience </li>
              <li>Understand the current technology code and upgrade the existing code</li>
              <li>Works with product team to understand the project requirements. </li>
              <li>Internal/External reporting on status of delivery </li>
              <li>Technical Documentation- Designing architecture, flow diagrams, documenting technical implementation approaches and pseudocode, ensure the technical feasibility of UI/UX Design </li>
              <li>Coordination within team and grooming junior team members.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-full hidden lg:block pt-5">
        <div>
          <h2 className='text-lg font-medium text-center'>Similar Jobs</h2>
        </div>
        <div className='grid grid-cols-1 justify-items-center gap-4 overflow-y-scroll h-[85vh] scrollbar-hidden pb-4'>
          <JobCard name={'Python'} />
          <JobCard name={'JavaScript'} />
          <JobCard name={'UI/UX Designer'} />
          <JobCard name={'JavaScript'} />
        </div>
      </div>
    </div>
  )
}

export default UserJobDetails