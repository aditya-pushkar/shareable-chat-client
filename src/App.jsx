import { useState } from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 ">
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
          <i className="ri-add-line ri-xl"></i>
        </button>
        <button className="btn btn-ghost btn-circle">
          <i className="ri-share-forward-fill ri-xl"></i>
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <div className="absolute top-0  w-full md:max-w-screen-md xl:max-w-screen-lg ">
          <NavBar />
        </div>
        {/* <!-- Page content here --> */}
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>
        <h1 className="text-base-content">This is the content</h1>

        {/* Btm Navbar */}
        <div className="btm-nav  px-5 lg:ml-32 flex flex-row items-center justify-center  ">
          <div className="flex flex-row items-center justify-center  bg-base border-t border-base-200 mb-1 ">
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
          <div className="flex flex-col w-full gap-1 ">
            <div className="flex justify-end ">
          <div className="badge badge-primary ">chats</div>

            </div>
            <div className="grid h-56  card bg-base-100 rounded-box place-items-center overflow-y-auto">
              <div class="relative">
                <div>
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
                 </li>
                 <li>
                  <a>How to land on mars</a>
                 </li>

                </div>
              </div>
            </div>

            <div className="flex justify-end mt-3">
          <div className="badge badge-primary ">Fork</div>

            </div>
            <div className="grid h-56 xl:h-48 pb-4 card bg-base-100 rounded-box place-items-center overflow-y-auto">
              <div class="relative">
                <div>
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
                 </li>
                 <li>
                  <a>How to land on mars</a>
                 </li>

                </div>
              </div>
            </div>
          </div>
          <div className="btm-nav bg-primary px-2 py-1 ">
            <div
              tabIndex={0}
              className="dropdown dropdown-top flex flex-row justify-center items-center hover:bg-primary-focus rounded-lg delay-100 px-1"
            >
              <div className="w-16 mask mask-squircle">
                <img src="./man.jpeg" />
              </div>
              <h1 className="text-base text-primary-content font-medium grow">
                Aditya Pushkar
              </h1>
              <i className="ri-more-line ri-xl"></i>

              {/* <label tabIndex={0} className="btn btn-ghost">Click</label> */}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-300 mb-3 rounded-box w-52"
              >
                <li>
                  <a>API</a>
                </li>
                <li>
                  <a>Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
