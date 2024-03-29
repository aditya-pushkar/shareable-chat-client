import style from '../markdown-styles.module.css'
import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from "axios";


import remarkGfm from 'remark-gfm'
import { OpenAIExt } from "openai-ext";

import BASE_URL from '../BASE_URL';
import { UserAuth } from '../context/AuthContext';

import NavBar from "../components/chat/NavBar";
import UserProfile, { APIModal } from "../components/chat/UserProfile";
import CreateChat from "../components/chat/CreateChat";
import ShareChat from '../components/chat/ShareChat';
import UserChatsTab from '../components/chat/UserChatsTab';



const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState("");
  const [chatTitle, setChatTitle] = useState("")
  const [isChatPublic, setIsChatPublic] = useState(false)
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [inputText, setInputText] = useState("");

  const {user, authToken} = UserAuth();

  let { chatId } = useParams();

  useEffect(() => {
    if (chats && isApiCalled) {
      handleSubmitionWithPreviousConvo(chats);
    }
  }, [chats]);

  useEffect(()=>{
    if(chatId) {
    fetchChatData()
    }
  },[chatId])

  useEffect(()=>{
    if(chats.length!==0)
    SaveChats()
  }, [chats])

  const fetchChatData = () => {
    axios
      .get(`${BASE_URL}/chats/detail/${chatId}`,{
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `token ${authToken}`
        },
      }).then(function (response) {
        if(response.status===200){
          setChats(response.data.chats)
          setChatTitle(response.data.title)
          setIsChatPublic(response.data.is_public)
        }
      })
      .catch(function (error) {
        console.error(error)
      });
  }

  const SaveChats = () => {
    console.log("saving chat data in backend")
    const payload =  {
      "chat_id" :chatId,
      "chats": chats
    }
    axios
      .patch(`${BASE_URL}/chats/update/`, payload, {
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `token ${authToken}`
        }
      }).then(function (response) {
        if(response.status===200){
          console.log("data saved in backend ")
        }
      })
      .catch(function (error) {
        console.error(error)
      });
  }

  // chats  = [{id: qeeer, gptContent: {}}]
  const handleSubmitionWithPreviousConvo = async (convo) => {
    let MESSAGES = convo.map((chat, key)=>chat)
    
    const streamConfig = {
      apiKey: "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", // Your API key
      handler: {
        // Content contains the string draft, which may be partial. When isFinal is true, the completion is done.
        onContent(content, isFinal, xhr) {
          // setIsStreaming(true)
          setCurrentChat(content)
          // console.log(content, "isFinal?", isFinal);
          if(isFinal){
            setChats((chats) => [
              ...chats,
              {role: "assistant", content: content },
              ]);
          }

        },
        onDone(xhr) {
          console.log("Done!");
          setIsApiCalled(false);
          setCurrentChat("");

        },
        onError(error, status, xhr) {
          console.error(error);
          setIsApiCalled(false);
          setCurrentChat("");
        },
      },
    };

    // Make the call and store a reference to the XMLHttpRequest
    const xhr = OpenAIExt.streamClientChatCompletion(
      {
        model: "gpt-3.5-turbo",
        messages: MESSAGES,
      },
      streamConfig
    );
  };

  const handleSubmit = () => {
    // Add server busy erro handling
    if (!inputText) return alert("Please add the input text");
    setChats((chats) => [...chats, {role: "user", content: inputText }]);
    setInputText("");
    return setIsApiCalled(true);
  };


  return (
    <div className="drawer drawer-mobile">
      <CreateChat />
      <APIModal />
      <ShareChat chatId={chatId}/>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <div className="absolute top-0  w-full  left-0 right-0 z-50">
          <NavBar title={chatTitle}/>
        </div>
        {/* <!-- Page content here --> */}
        <div className="flex  flex-col w-full mt-16  ">
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
                      <img src={chat.role==="user"? `${user.photoURL}`: "../chatgpt-logo.webp" }/>
                    </div>
                  </div>
                  <div className={` ${chat['role']==="assistant"&&"text-white"} lg:pr-10 flex flex-col gap-5 relative `}>
                  <ReactMarkdown
                  className={style.reactMarkDown}
                   children={chat.content} remarkPlugins={[remarkGfm]} />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  chats.length - 1 === key && !currentChat &&"h-28 bg-base-100 w-full"
                }`}
              ></div>
            </div>
            
          ))}
        </div>
        {isApiCalled&&currentChat&&(
          <div
          className={`flex flex-row gap-5  w-full px-8 py-5 bg-primary bg-opacity-50 mb-28 leading-8 `}
        >
          <div className="avatar z-0 ">
            <div className="w-10 h-10 md:h-8 md:w-8 rounded-xl">
              <img src="../chatgpt-logo.webp"  />
            </div>
          </div>
          <div className={`lg:pr-10 flex flex-col gap-5 text-white`}>
                  <ReactMarkdown 
                  className={style.reactMarkDown}
                  children={currentChat} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
        )}

        {/* Btm Input */}
        <div className="btm-nav  px-5 lg:ml-32 flex flex-row items-center justify-center ">
          <div className="flex flex-row items-center justify-center  bg-base border-t border-base-200 ">
            <input
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-ghost bg-base-300 w-full  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg "
              value={inputText}
            />
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn btn-ghost btn-circle"
              disabled={isApiCalled||!inputText?true:false}
            >
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

         <UserChatsTab/>

          <UserProfile />
        </ul>
      </div>
    </div>
  );
};

export default Chat;
