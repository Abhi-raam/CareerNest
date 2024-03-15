import { Link } from 'react-router-dom'
import loginImg from '../../assets/login.png'
function UserRegister() {
    return (
        <div className='h-screen flex items-center justify-around'>
            <div className='w-[80%] lg:w-1/3  space-y-5'>
                <div className='space-y-3'>
                    <h2 className='text-center text-2xl font-semibold'>Welcome Back!</h2>
                    <h4 className='text-sm text-center text-gray-500 font-semibold'>Please sign in to continue</h4>
                </div>
                <label className="form-control ">
                    <div className="label">
                        <span className="label-text">Username</span>
                    </div>
                    <input type="text" placeholder="Username" className="input input-bordered" />
                </label>
                <div className='flex justify-between space-x-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">First Name</span>
                        </div>
                        <input type="text" placeholder="Firstname" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Last Name</span>
                        </div>
                        <input type="text" placeholder="Lastname" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <label className="form-control ">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered" />
                </label>
                <label className="form-control ">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input type="password" placeholder="Password" className="input input-bordered" />
                </label>
                <button className='btn w-full bg-blue-600 text-white hover:bg-blue_secondary'>
                    Signup
                </button>
                <div className='text-center'>
                    <h3>Already a member ? <Link to='/login' className='text-blue_secondary font-medium underline cursor-pointer'>Login Now</Link></h3>
                </div>
            </div>
            <div className='w-auto hidden lg:block'>
                <img src={loginImg} alt="" />
            </div>
        </div>
    )
}

export default UserRegister