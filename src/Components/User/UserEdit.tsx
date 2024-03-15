import { useState } from "react"

function UserEdit() {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [mobile, setMobile] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [dept, setDept] = useState<string>("")
    const [job, setJob] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [dob, setDob] = useState<string>("")
    const [district, setDistrict] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [about, setAbout] = useState<string>("")

    const [skill, setSkill] = useState<string[]>([]);

    // Function to handle textarea change and update the array
    // const handleTextareaChange = (event:any) => {
    //     const textareaValue = event.target.value;
    //     const elementsArray = textareaValue.split(',').map((element: string) => element.trim());
    //     setSkill(elementsArray);
        
    // }

   const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = event.target.value;
    const elementsArray = textareaValue.split(',').map((element: string) => element.trim());
    
    const skillObject = elementsArray.reduce((obj:any, element: string, index: number) => {
        obj[index] = element
        return obj;
    }, {});

    setSkill(skillObject);
}


    const submitBtn = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(mobile);
        console.log(email);
        console.log(dept);
        console.log(job);
        console.log(gender);
        console.log(dob);
        console.log(district);
        console.log(state);
        console.log(skill);
        console.log(about);
    }

    return (
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6  space-y-4 lg:space-y-5">
            <form action="" className="space-y-4 lg:space-y-5" onSubmit={submitBtn}>
                <div className='lg:flex justify-around pt-5 space-y-4 lg:space-y-0'>
                    <div className='flex justify-between  lg:pl-5  w-full md:px-10'>
                        <label className='text-base font-semibold text-gray-600'>First Name</label>
                        <input type="text" placeholder="First Name" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setFirstName(event.target.value) }} />
                    </div>
                    <div className='flex justify-between  lg:pl-5  w-full md:px-10'>
                        <h4 className='text-base  font-semibold text-gray-600'>Last Name</h4>
                        <input type="text" placeholder="Last Name" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setLastName(event.target.value) }} />
                    </div>
                </div>
                <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                    <div className='flex justify-between  w-full md:px-10'>
                        <h4 className='text-base  font-semibold text-gray-600'>Mobile</h4>
                        <input type="text" placeholder="Mobile No." className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setMobile(event.target.value) }} />
                    </div>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>Email</h4>
                        <input type="email" placeholder="Email" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                </div>
                <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>Department</h4>
                        <input type="text" placeholder="Department" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setDept(event.target.value) }} />
                    </div>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>Job Title</h4>
                        <input type="text" placeholder="Job Title" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setJob(event.target.value) }} />
                    </div>
                </div>
                <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>Gender</h4>
                        <input type="text" placeholder="Gender" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setGender(event.target.value) }} />
                    </div>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>DOB</h4>
                        <input type="date" placeholder="Date of Birth" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setDob(event.target.value) }} />
                    </div>
                </div>
                <div className='lg:flex justify-around space-y-4 lg:space-y-0'>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>District</h4>
                        <input type="text" placeholder="District" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setDistrict(event.target.value) }} />
                    </div>
                    <div className='flex justify-between  lg:pl-10  w-full md:px-10'>
                        <h4 className='text-base font-semibold text-gray-600'>State</h4>
                        <input type="text" placeholder="State" className=" w-1/2 input-bordered outline-none input-sm border-b-2 border-0 max-w-lg" onChange={(event) => { setState(event.target.value) }} />
                    </div>
                </div>
                <div className='flex justify-between lg:space-x-[9rem] lg:pl-10 w-full md:px-10'>
                    <h4 className='text-base font-semibold text-gray-600'>Skills</h4>
                    <textarea placeholder="Skill1,skill2,...." className="textarea textarea-bordered textarea-md w-1/2 lg:w-full" onChange={handleTextareaChange}></textarea>
                </div>
                <div className='flex  justify-between lg:space-x-[9rem] lg:pl-10 w-full md:px-10'>
                    <h4 className='text-base font-semibold text-gray-600'>About</h4>
                    <textarea placeholder="About" className="textarea textarea-bordered textarea-md w-1/2 lg:w-full" onChange={(event)=>{setAbout(event.target.value)}}></textarea>
                </div>
                

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
                    <div className='flex justify-between lg:pl-10 w-full md:px-10'>
                        <label className="form-control w-full max-w-xs text-base font-semibold text-gray-600">Profile Picture
                            <input type="file" className="file-input file-input-bordered file-input-sm  max-w-lg" />
                            <div className="label">
                                <span className="label-text-alt">Only JPEG,JPG,PNG allowed</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className=' lg:pl-9 w-full md:px-10'>
                        <label className="form-control w-full max-w-xs text-base font-semibold text-gray-600">Resume
                            <input type="file" className="file-input file-input-bordered file-input-sm  max-w-lg" />
                            <div className="label">
                                <span className="label-text-alt">Only PDF allowed</span>
                            </div>
                        </label>
                    </div>
                    <div className=' lg:pl-5 w-full md:px-10'>
                        <label className="form-control w-full max-w-xs text-base font-semibold text-gray-600">Degree
                            <input type="file" className="file-input file-input-bordered file-input-sm  max-w-lg" />
                            <div className="label">
                                <span className="label-text-alt">Only PDF allowed</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className=' lg:pl-9 w-full md:px-10'>
                        <label className="form-control w-full max-w-xs text-base font-semibold text-gray-600">12th
                            <input type="file" className="file-input file-input-bordered file-input-sm  max-w-lg" />
                            <div className="label">
                                <span className="label-text-alt">Only PDF allowed</span>
                            </div>
                        </label>
                    </div>
                    <div className='lg:pl-5 w-full md:px-10'>
                        <label className="form-control w-full max-w-xs text-base font-semibold text-gray-600">10th
                            <input type="file" className="file-input file-input-bordered file-input-sm  max-w-lg" />
                            <div className="label">
                                <span className="label-text-alt">Only PDF allowed</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="btn bg-green-500 text-white hover:bg-green-600" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserEdit