import { Link } from 'react-router-dom'
import loginImg from '../../assets/login.png'
import { useState } from 'react'
import axios from '../../Axios'
import { useCookies } from 'react-cookie'
import { useAuth } from '../../Context/AuthContext'

function UserLogin() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [token,setToken] = useCookies(["careerNest-token"])
  const {authUser,setAuthUser} = useAuth()
  const loginSubmitBtn = async (event:React.FormEvent)=>{
    event.preventDefault();
    console.log(authUser);
    console.log(username);
    await axios.post('/user/login',{username,password}).then((response)=>{
      setToken("careerNest-token",response.data.token)
      setAuthUser(token["careerNest-token"]);
    })
  }
  return (
    <div className='h-screen flex items-center justify-around'>
      <div className='w-[80%] lg:w-1/3  space-y-5'>
        <div>
          <h2 className='text-center text-2xl font-semibold'>Welcome Back!</h2>
          <h4 className='text-sm text-center text-gray-500 font-semibold'>Please login to continue</h4>
        </div>
        <form action="" onSubmit={loginSubmitBtn}>
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="Username" className="input input-bordered" onChange={(event) => { setUserName(event.target.value) }} />
          </label>

          <label className="form-control ">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Password" className="input input-bordered" onChange={(event) => { setPassword(event.target.value) }} />
          </label>
          <button type='submit' className='btn w-full bg-blue-600 text-white hover:bg-blue_secondary'>
            Login
          </button>
        </form>
        <div className='text-center'>
          <h3>Not a member ? <Link to='/signup' className='text-blue_secondary font-medium underline cursor-pointer'>Register Now</Link></h3>
        </div>
      </div>
      <div className='w-auto hidden lg:block'>
        <img src={loginImg} alt="" />
      </div>
    </div>
  )
}

export default UserLogin