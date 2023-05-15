import React from "react";

const CreateChat = () => {
  return (
    <>
      <input type="checkbox" id="create-chat-modal" className="modal-toggle" />
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
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full"
            />
            <button className="btn">Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChat;
