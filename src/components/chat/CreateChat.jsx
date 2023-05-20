import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserAuth } from "../../context/AuthContext";
import BASE_URL from "../../BASE_URL";

const CreateChat = () => {
  const [title, setTitle] = useState(null)
  const [isSubmited, setIsSubmited] = useState(false)

  const {authToken} = UserAuth()
  const navigate = useNavigate()

  const createChat = () => {
    const payload =  {
      "title": title
    }
    axios
      .post(`${BASE_URL}/chats/create/`, payload, {
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `token ${authToken}`
        }
      }).then(function (response) {
        if(response.status===200){
          navigate(`${response.data.id}`)
          location.reload();
        }
      })
      .catch(function (error) {
        console.error(error)
      });
  }

  const handleSubmit = () => {
    setIsSubmited(true)
    createChat()
  }

  return (
    <>
      <input type="checkbox" id="create-chat-modal" className="modal-toggle"  />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="create-chat-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">Create Chat</h3>
          <div className="flex flex-col gap-5 mt-7 items-center">
            <input
            onChange={(e)=>setTitle(e.target.value)}
              type="text"
              placeholder="Chat Title"
              className={`input input-bordered input-primary w-full `}
              required
            />
            <button
            onClick={handleSubmit}
            className={`btn ${isSubmited&&"loading"} `}
            disabled={!title?true:false}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChat;
