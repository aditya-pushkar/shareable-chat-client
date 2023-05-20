import style from '../markdown-styles.module.css'
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm'

import ReactMarkdown from 'react-markdown';
import axios from "axios";

import BASE_URL from "../BASE_URL";

const Header = ({chatTitle}) => {

  return (
    <div className="navbar bg-base-100 px-5 border-b border-base-200 fixed z-50">
      <div className="navbar-start">
        <h1 className="text-sm md:text-lg tracking-wider font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-info cursor-pointer">
          Shareable Chat
        </h1>
      </div>
      <div className="navbar-center">
        <a className="normal-case text-lg md:text-xl font-medium tracking-wide ">{chatTitle}</a>
      </div>
      <div className="navbar-end">
        <button className="btn flex flex-row gap-3 btn-sm font-medium">
        <svg  className="h-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" fill="rgba(232,238,240,1)"></path></svg>
          Fork
        </button>
      </div>
    </div>
  );
};

const SharedChatPage = () => {
  const [chats, setChats] = useState([])
  const [chatTitle, setChatTitle] = useState("")
  const [error, setError] = useState(false)

  let { chatId } = useParams();

  useEffect(()=>{
    if(chatId){
    fetchPublicChats()
    }else{
      setError(true)
    }
  }, [])

  const fetchPublicChats = () => {
    // 
    axios
    .get(`${BASE_URL}/chats/read/${chatId}`,{
      headers: {
        'Content-Type': 'Application/json',
      },
    }).then(function (response) {
      if(response.status===200){
        setChats(response.data.chats)
        setChatTitle(response.data.title)
      }
      else(
        setError(true)
      )
    })
    .catch(function (error) {
      setError(true)
    });
  }

  return (
    <div className="flex flex-col items-center">
      <Header chatTitle={chatTitle}/>
      <div className="flex  flex-col w-full mt-16 z-0 ">
          {chats&&chats.map((chat, key) => (
            <div key={key}>
              <div
                className={`w-full px-8 py-5 ${
                  chat.role === "system" ? "hidden" : "flex flex-row"
                } ${
                  chat.role === "user"
                    ? "bg-base-100"
                    : "bg-primary bg-opacity-50"
                }`}
              >
                <div className={`flex flex-row gap-5 leading-8 `}>
                  <div className="avatar z-0 ">
                    <div className="w-10 h-10 md:h-8 md:w-8 rounded-xl">
                      <img src={chat.role==="user"? "../user-fill.png" : "../chatgpt-logo.webp" }/>
                    </div>
                  </div>
                  <div className={` ${chat['role']==="assistant"&&"text-white"} lg:pr-10 flex flex-col gap-5 relative `}>
                  <ReactMarkdown
                  className={style.reactMarkDown}
                   children={chat.content} remarkPlugins={[remarkGfm]} />
                  </div>
                </div>
              </div>
              
            </div>
            
          ))}
        </div>
{error&&(
  <div className="flex flex-col items-center justify-center my-52">
  <h1 className="bg-primary px-12 py-3 text-primary-content bg-opacity-75">Access Denied</h1>
</div>
)}
    </div>
  );
};

export default SharedChatPage;
