import React from "react";
import { FaPlus } from "react-icons/fa";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";



const Home = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="flex flex-1 max-w-7xl mx-auto mt-6 gap-6 px-4 items-start justify-center">
        
        {/* Main Feed - Center */}
        <div className="flex-3 space-y-6 max-w-lg">
          <PostList/>
        </div>

        {/* Sidebar - Right */}
        <div className="flex-1 hidden lg:block">
          <div className="card p-6 bg-base-100 shadow-lg rounded-xl w-72 flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-2">People you may know</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0"></div>
                  <span className="wrap-break-wordbreak-words">Jane Doe</span>
                </div>
                <button className="btn btn-xs btn-primary">Follow</button>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0"></div>
                  <span className="wrap-break-wordbreak-words">John Smith</span>
                </div>
                <button className="btn btn-xs btn-primary">Follow</button>
              </li>
              {/* Add more suggestions here */}
            </ul>
          </div>
        </div>

      </div>

      {/* Floating Create Post Button */}
      <button className="fixed bottom-6 right-6 btn btn-primary rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
       <Link to="/create/post">
        <FaPlus />
       </Link>
      </button>
    </div>
  );
};

export default Home;
