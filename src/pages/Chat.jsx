import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

import NavBar from "../component/chat/NavBar";
import UserProfile, { ApiModal } from "../component/chat/UserProfile";
import CreateChat from "../component/chat/CreateChat";
import UserChats from "../component/chat/UserChats";
import UserForkChats from "../component/chat/UserForkChats";

import Loading from "../component/chat/Loading";

const configuration = new Configuration({
  apiKey: "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",
});
delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);




const Chat = () => {
  const [currentNavbarTab, setCurrentNavbarTab] = useState("chats")
  const [chats, setChats] = useState([])
  const [convo, setConvo] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [inputText, setInputText] = useState("")

  useEffect(()=>{
    if(chats&&isApiCalled){
    handleSubmitionWithPreviousConvo(chats)
    }
  },[chats])

  const handleSubmitionWithPreviousConvo = async(convo) => {
    console.log("Convo in func", convo)
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: convo
    });
    const data = response.data.choices[0].message.content
    setChats(chats=>[...chats, {'role': 'assistant', 'content': data}])
    setIsApiCalled(false)
  }

  const handleSubmit = () => {
    if(chats.length===0){
      setChats(chats=>([...chats, {'role': 'system', 'content': 'You are a good assistant.'}, {'role': 'user', 'content': inputText}]))
    }else{
      setChats(chats=>([...chats, {'role': 'user', 'content': inputText}]))   
    }
    setInputText("")
    return setIsApiCalled(true);
  }

  // console.log(chats)

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
            <div key={key}>
                <div
                className={`w-full px-10 py-5 ${chat["role"]==="system"? "hidden": "flex flex-row"} ${chat["role"]==="user"? "bg-base-100": "bg-primary bg-opacity-30"}`}
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
            onChange={(e)=>setInputText(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-ghost bg-base-300 w-full  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg "
              value={inputText}
            />
            <button
            onClick={()=>handleSubmit()}
            type="submit"
             className="btn btn-ghost btn-circle">
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
            className={`tab  cursor-pointer ${currentNavbarTab==="chats"&&"tab-active"} delay-75`}>Chats</a> 
            <a
            onClick={()=>setCurrentNavbarTab("fork")}
             className={`tab cursor-pointer ${currentNavbarTab==="fork"&&"tab-active"} delay-75 `}>Fork</a> 
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
