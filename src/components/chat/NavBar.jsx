import React from 'react'

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
            <label htmlFor="create-chat-modal" className="btn btn-ghost btn-circle ri-add-line text-2xl cursor-pointer "></label>
            <label htmlFor="share-chat-modal" className=" btn btn-ghost btn-circle ri-share-forward-fill text-2xl cursor-pointer"></label>

        </div>
      </div>
    );
  };

export default NavBar