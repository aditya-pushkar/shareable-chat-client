import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const LandingPage = () => {
  const {googleSignIn, logOut, user} = UserAuth()
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(user){
  //     return navigate("chat")
  //   }
  // },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        {!user?(
          <button 
          onClick={()=>googleSignIn()}
          className='btn btn-primary'>Google SignIn</button>
        ):
        <button 
        onClick={()=>logOut()}
        className='btn btn-primary'>LogOut</button>}
    </div>
  )
}

export default LandingPage