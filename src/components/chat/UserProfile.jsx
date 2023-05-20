import React, {useState} from 'react'
import { UserAuth } from '../../context/AuthContext'

export const APIModal = () => {
  const [apiKey, setApiKey] = useState(null)
return (
  <>
  <input type="checkbox" id="update-api-modal" className="modal-toggle" />
  <div className="modal">
    <div className="modal-box relative">
      <label
        htmlFor="update-api-modal"
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </label>
      <h3 className="text-xl font-bold">Update API key</h3>
      {apiKey?(
        <div className='flex flex-col gap-5 mt-7 items-center'>
        <div className='flex flex-row gap-3 items-center w-full'>
        <h1 className='grow'>**********************34</h1>
        <button className='btn btn-error btn-sm '>Delete</button>
        </div>
        <p className='text-xs text-error '>In order to use new api key, you have to delete old one!</p>
      </div>
      ):(
        <div className="flex flex-col gap-5 mt-7 items-center">
        <input
          type="text"
          placeholder="Your API key"
          className="input input-bordered input-primary w-full"
        />
        <button className="btn">Update</button>
      </div>
      )}
      
    </div>
  </div>
</>
)
}


const UserProfile = () => {
  const {user} = UserAuth()
  return (
    <>
    <div className="btm-nav bg-primary px-2 py-1 ">
            <div
              tabIndex={0}
              className="dropdown dropdown-top flex flex-row justify-center items-center hover:bg-primary-focus rounded-lg delay-100 px-1"
            >
              <div className="w-9 mask mask-squircle ">
                <img src={user.photoURL} alt="User pfp"/>
              </div>
              <h1 className="text-base text-primary-content font-medium grow">
                {user.displayName}
              </h1>
              <i className="ri-more-line ri-xl"></i>

              {/* <label tabIndex={0} className="btn btn-ghost">Click</label> */}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-300 mb-3 rounded-box w-52"
              >
                <li>
                  <label htmlFor="update-api-modal">API</label>
                </li>
                <li>
                  <a>Log out</a>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}

export default UserProfile