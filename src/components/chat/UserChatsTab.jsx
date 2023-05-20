import React, {useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

import BASE_URL from '../../BASE_URL';
import { useEffect } from 'react';


const Loader = () => {
  return (
    <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
  )
}

const UserChats = ({currentTab}) => {
  const[chats, setChats] = useState(null)
  const {authToken} = UserAuth()

  useEffect(()=>{
    fetchChats()
  },[currentTab])


  const fetchChats = () => {
    axios
      .get(`${BASE_URL}/chats/list?query=${currentTab}`,{
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `token ${authToken}`
        }
      }).then(function (response) {
        if(response.status===200){
          setChats(response.data)
        }
      })
      .catch(function (error) {
        // alert("Server error while signup");
        return logOut()
      });
  }

  if(chats===null) return <Loader/>

    return (
      <>
      {chats.map((chat, key)=>(
        <li key={key}>
        <Link to={`${chat.id}`}>{chat.title}</Link>
      </li>
      ))}

       
      </>
    );
  };
const UserChatsTab = () => {
    const [currentNavbarTab, setCurrentNavbarTab] = useState('chats')
    return (
    <div className="flex flex-col items-center ">
            <div className="tabs tabs-boxed bg-base-300">
              <a
                onClick={() => setCurrentNavbarTab("chats")}
                className={`tab  cursor-pointer ${
                  currentNavbarTab === "chats" && "tab-active"
                } delay-75`}
              >
                Chats
              </a>

              <a
                onClick={() => setCurrentNavbarTab("fork")}
                className={`tab cursor-pointer ${
                  currentNavbarTab === "fork" && "tab-active"
                } delay-75 `}
              >
                Fork
              </a>
            </div>
            <div className="overflow-y-auto h-[25rem] mt-5 ">
            <UserChats currentTab={currentNavbarTab}/>
          </div>
          </div>
  )
  
}

export default UserChatsTab