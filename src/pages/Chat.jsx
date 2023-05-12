import { useState } from "react";
import CreateChat from "../component/chat/CreateChat";


import UserProfile, { ApiModal } from "../component/chat/UserProfile";
import UserChats from "../component/chat/UserChats";
import UserForkChats from "../component/chat/UserForkChats";


const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 z-50 ">
      <div className="navbar-start  ">
        <label
          htmlFor="my-drawer-2"
          className="px-2 py-2 lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="navbar-center  text-base md:text-lg max-w-prose ">
        <a className="font-medium tracking-wide text-white ">
          How to live on a mars...
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <label htmlFor="create-chat-modal" className="ri-add-line ri-xl cursor-pointer "></label>
        </button>
        <button className="btn btn-ghost btn-circle">
          <i className="ri-share-forward-fill ri-xl"></i>
        </button>
      </div>
    </div>
  );
};

const Chat = () => {
  const [currentNavbarTab, setCurrentNavbarTab] = useState("chats")
  const chats = [
    {
      role: "user",
      content:
        "build a chat assistant who will suggest the health insurance according to my needs",
    },
    {
      role: "assistant",
      content:
        "Hello! I can help you build a chat assistant that suggests health insurance based on your needs. To start, we'll need to identify what type of health insurance you're looking for and what your specific needs are. Here are some questions that will help me better understand your requirements: What type of health insurance are you looking for (e.g., individual, family, group, employer-sponsored, etc.)? What is your budget for health insurance premiums? What are your healthcare needs (e.g., coverage for pre-existing conditions, prescription medications, preventative care, mental health services, etc.)? Are you willing to pay higher premiums for a lower deductible or lower premiums for a higher deductible? Do you prefer a specific type of healthcare network (e.g., HMO, PPO, EPO, POS)? Once we have answers to these questions, we can start building your chat assistant.",
    },
    {
      role: "user",
      content:
        "build a chat assistant who will suggest the health insurance according to my needs",
    },
    {
      role: "assistant",
      content:
        "Hello! I can help you build a chat assistant that suggests health insurance based on your needs. To start, we'll need to identify what type of health insurance you're looking for and what your specific needs are. Here are some questions that will help me better understand your requirements: What type of health insurance are you looking for (e.g., individual, family, group, employer-sponsored, etc.)? What is your budget for health insurance premiums? What are your healthcare needs (e.g., coverage for pre-existing conditions, prescription medications, preventative care, mental health services, etc.)? Are you willing to pay higher premiums for a lower deductible or lower premiums for a higher deductible? Do you prefer a specific type of healthcare network (e.g., HMO, PPO, EPO, POS)? Once we have answers to these questions, we can start building your chat assistant.",
    },
  ];

  return (
    <div className="drawer drawer-mobile">
      <CreateChat/>
      <ApiModal/>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <div className="absolute top-0  w-full  left-0 right-0 z-50">
          <NavBar />
        </div>
        {/* <!-- Page content here --> */}
        <div className="flex  flex-col w-full mt-16  ">
          {chats.map((chat, key) => (
            <div>
            <div
              className={`w-full px-10 py-5 flex flex-row  ${chat["role"]==="user"? "bg-base-100": "bg-primary bg-opacity-30"}`}
              key={key}
            >
             <div className={`flex flex-row gap-5 leading-relaxed `}>
             <div className="avatar z-0 ">
                <div className="w-10 h-10 md:h-8 md:w-8 rounded-xl">
                  <img src="./man.jpeg" />
                </div>
              </div>
              <h1 className="grow text-md text-white lg:pr-10 ">{chat.content}</h1>
              </div>
            </div>
            <div className={`${chats.length-1===key&&"h-28 bg-base-100 w-full"}`}>
            </div>
            </div>
          ))}
        </div>

        {/* Btm Input */}
        <div className="btm-nav  px-5 lg:ml-32 flex flex-row items-center justify-center fixed ">
          <div className="flex flex-row items-center justify-center  bg-base border-t border-base-200 ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost bg-base-300 w-full  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg "
            />
            <button className="btn btn-ghost btn-circle">
              <i className="ri-send-plane-fill ri-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 w-60 bg-base-200 text-base-content ">
          {/* <!-- Sidebar content here --> */}
          <div className="mb-7 cursor-pointer px-2.5 text-xl  py-1 ">
            <h1 className="tracking-wider font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-info">
              Shareable Chat
            </h1>
          </div>

          <div className="flex flex-col items-center ">
          <div className="tabs tabs-boxed ">
            <a 
            onClick={()=>setCurrentNavbarTab("chats")}
            className={`tab  cursor-pointer ${currentNavbarTab==="chats"&&"tab-active"} delay-100`}>Chats</a> 
            <a
            onClick={()=>setCurrentNavbarTab("fork")}
             className={`tab cursor-pointer ${currentNavbarTab==="fork"&&"tab-active"} delay-100`}>Fork</a> 
          </div>
          </div>
          <div className="overflow-y-auto h-[25rem] mt-5 ">
          {currentNavbarTab==="chats"?(
            <UserChats/>
          ):(
            <UserForkChats/>
          )}
          </div>

          <UserProfile />
        </ul>
      </div>
    </div>
  );
};

export default Chat;
