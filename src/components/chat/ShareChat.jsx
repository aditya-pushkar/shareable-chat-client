import React, {useState} from "react";

const ShareChat = () => {
    const [isPublic, setIsPublic] = useState(false)
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
                onClick={()=>isPublic?setIsPublic(false):setIsPublic(true)}
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked={isPublic}
                />
              </label>
            </div>
            <p className="text-[11px] md:text-[13px] px-2 py-1 mt-1 tracking-wide">Anyone with this link can see your chat and able to fork it for there own use.</p>
            <div className="flex flex-col items-end w-full px-1">
            <button className="btn btn-link text-base-content ">Copy Link</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareChat;
