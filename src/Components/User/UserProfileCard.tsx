import profilePic from '../../assets/profilepic.jpeg'
import UserEdit from './UserEdit'
function UserProfileCard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-auto min-h-screen">
            <div className="pt-10">
                <div className='flex justify-center'>
                    <img src={profilePic} className='rounded-full w-[9rem]' alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='font-semibold text-xl'>Steve Rogers</h3>
                    <h4 className='text-sm font-medium text-gray-600'>Web Developer</h4>
                </div>
                <div className='pt-6 px-6'>
                    <h3 className='text-blue_secondary text-xl font-semibold text-start'>About</h3>
                    <div className='pt-2'>
                        <p className='text-sm font-medium text-justify'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="px-3 pt-6 col-span-2 pb-4">
                <div role="tablist" className="tabs tabs-lifted">

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-base lg:text-lg font-semibold" aria-label="Account Settings" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-[30rem] space-y-4 lg:space-y-5">
                        <div className='lg:flex justify-around pt-5 space-y-4 lg:space-y-0'>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>First Name</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2  font-medium '>Steve Rogers</h4>
                            </div>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>Last Name</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2  font-medium '>Steve Rogers</h4>
                            </div>
                        </div>
                        <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>Mobile</h4>
                                <h4 className='border-b-2 border-gray-400  lg:w-1/2 font-medium '>+91 9999999999</h4>
                            </div>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>Email</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2  font-medium '>sample@gmail.com</h4>
                            </div>
                        </div>
                        <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>Department</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2 font-medium'>CSE</h4>
                            </div>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>Job Title</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2  font-medium '>Web Developer</h4>
                            </div>
                        </div>
                        <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>Gender</h4>
                                <h4 className='border-b-2 border-gray-400  w-1/2 font-medium '>Male</h4>
                            </div>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>DOB</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2  font-medium '>01 Jan 2000</h4>
                            </div>
                        </div>
                        <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>District</h4>
                                <h4 className='border-b-2 border-gray-400  w-1/2 font-medium '>Kottayam</h4>
                            </div>
                            <div className='flex justify-around px-10  w-full'>
                                <h4 className='text-base font-semibold text-gray-600'>State</h4>
                                <h4 className='border-b-2 border-gray-400 w-1/2  font-medium '>Kerala</h4>
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-base lg:text-lg font-semibold" aria-label="Certifications and Skills" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-[30rem]">
                        <div className='pt-5 pl-6'>
                            <h3 className='text-blue_secondary text-xl font-semibold text-start'>Skills</h3>
                            <div>
                                <ul className="list-disc text-sm pt-3 text-gray-700 font-medium list-outside px-4">
                                    <li>MongoDB</li>
                                    <li>ExpressJs</li>
                                    <li>ReactJs</li>
                                    <li>NodeJs</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-3 space-y-5 pt-6">
                            <div>
                                <h3 className='text-blue_secondary text-xl font-semibold text-start'>Certificates</h3>
                            </div>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pb-5'>
                                <button className='btn bg-blue_secondary text-blue_main hover:bg-blue-900 shadow-md'>Resume</button>
                                <button className='btn bg-blue_secondary text-blue_main hover:bg-blue-900 shadow-md'>Degree</button>
                                <button className='btn bg-blue_secondary text-blue_main hover:bg-blue-900 shadow-md'>12th</button>
                                <button className='btn bg-blue_secondary text-blue_main hover:bg-blue-900 shadow-md'>10th</button>
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-base lg:text-lg font-semibold" aria-label="Edit" />
                    <UserEdit />
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard