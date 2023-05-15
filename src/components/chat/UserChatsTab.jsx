import React, {useState} from 'react'

const UserChats = () => {
    return (
      <>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars and </a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars</a>
        </li><li>
          <a>How to land on mars</a>
        </li><li>
          <a>How to land on mars</a>
        </li><li>
          <a>How to land on mars</a>
        </li><li>
          <a>How to land on mars</a>
        </li><li>
          <a>How to land on mars</a>
        </li>
        <li>
          <a>How to land on mars and</a>
        </li>
        
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
                } delay-75 text-xs`}
              >
                Chats
              </a>
              <a
                onClick={() => setCurrentNavbarTab("private")}
                className={`tab cursor-pointer ${
                  currentNavbarTab === "private" && "tab-active"
                } delay-75 text-xs`}
              >
                Private
              </a>
              <a
                onClick={() => setCurrentNavbarTab("fork")}
                className={`tab cursor-pointer ${
                  currentNavbarTab === "fork" && "tab-active"
                } delay-75 text-xs`}
              >
                Fork
              </a>
            </div>
            <div className="overflow-y-auto h-[25rem] mt-5 ">
            <UserChats/>
          </div>
          </div>
  )
  
}

export default UserChatsTab