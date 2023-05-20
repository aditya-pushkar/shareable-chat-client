import React, { useState, useEffect } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

import { UserAuth } from "../../context/AuthContext";
import BASE_URL from "../../BASE_URL";

const ShareChat = ({ chatId }) => {
  const [isPublic, setIsPublic] = useState(false);
  const [isQuerySubmitting, setIsQuerySubmitting] = useState(false);

  const { authToken } = UserAuth();

  useEffect(() => {
    fetchChatData();
  }, [chatId]);

  const handleSubmit = () => {
    share();
  };

  const fetchChatData = () => {
    axios
      .get(`${BASE_URL}/chats/detail/${chatId}`, {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `token ${authToken}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          setIsPublic(response.data.is_public);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const share = () => {
    setIsQuerySubmitting(true);
    const payload = {
      chat_id: chatId,
    };
    axios
      .post(
        `${BASE_URL}/chats/share?share=${isPublic ? false : true}`,
        payload,
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: `token ${authToken}`,
          },
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          setIsPublic(isPublic ? false : true);
          setIsQuerySubmitting(false);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <input type="checkbox" id="share-chat-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="share-chat-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">Share</h3>

          <div className=" gap-5 mt-7 items-center ">
            <div className="form-control w-full bg-base-200 px-3 py-2">
              <label className="cursor-pointer label">
                <span className="label-text ">
                  Share your chat to the public
                </span>
                <input
                  disabled={isQuerySubmitting ? true : false}
                  onClick={handleSubmit}
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked={isPublic}
                />
              </label>
            </div>
            <p className="text-[11px] md:text-[13px] px-2 py-1 mt-1 tracking-wide">
              Anyone with this link can see your chat and able to fork it for
              there own use.
            </p>
            <div className="flex flex-col items-end w-full px-1">
              {isPublic && (
                <CopyToClipboard text={`${window.location.origin}/p/${chatId}`}>
                  <label className="swap">
                    <input type="checkbox" />
                    <div className="swap-on">Copied!</div>
                    <div className="swap-off">Copy Link</div>
                  </label>
                </CopyToClipboard>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareChat;
