import React from "react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="h-20 flex justify-between w-screen bg-gray-900 px-20">
        <p className="text-white my-7 text-2xl">Welcome {user.name}</p>
        <button className=" h-10 py-1 p-4 my-6 border border-white rounded-2xl text-white hover:bg-white hover:text-gray-900">LogOut</button>
      </div>
    </>
  );
};

export default Navbar;
