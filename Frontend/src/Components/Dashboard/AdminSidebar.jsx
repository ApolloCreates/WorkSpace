import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const AdminSidebar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white h-screen top-0 left-0 bottom-0 w-70 ">
        <div>
          <h1 className="font-bold text-4xl justify-center items-center px-10 py-10 mb-10">
            WorkSpace
          </h1>
        </div>
        <div className="px-4 py-2">
          <NavLink
            to="/admindashboard"
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-black" : ""
              } flex items-center px-8 py-2.5 gap-x-8 rounded-2xl`
            }
          >
            <AiFillDashboard />
            <span className="text-2xl">Dashboard</span>
          </NavLink>
        </div>
        <div className="px-4 py-2">
          <NavLink
            to="/admindashboard"
            className="flex items-center px-8 py-2.5 gap-x-8"
          >
            <HiUsers />
            <span className="text-2xl">Employees</span>
          </NavLink>
        </div>
        <div className="px-4 py-2">
          <NavLink
            to="/admindashboard"
            className="flex items-center px-8 py-2.5 gap-x-8"
          >
            <FaBuilding />
            <span className="text-2xl">Departments</span>
          </NavLink>
        </div>
        <div className="px-4 py-2">
          <NavLink
            to="/admindashboard"
            className="flex items-center px-8 py-2.5 gap-x-8"
          >
            <SlCalender />
            <span className="text-2xl">Leaves</span>
          </NavLink>
        </div>
        <div className="px-4 py-2">
          <NavLink
            to="/admindashboard"
            className="flex items-center px-8 py-2.5 gap-x-8"
          >
            <FaMoneyBill1Wave />
            <span className="text-2xl">Salary</span>
          </NavLink>
        </div>
        <div className="px-4 py-2">
          <NavLink
            to="/admindashboard"
            className="flex items-center px-8 py-2.5 gap-x-8"
          >
            <IoMdSettings />
            <span className="text-2xl">Settings</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
