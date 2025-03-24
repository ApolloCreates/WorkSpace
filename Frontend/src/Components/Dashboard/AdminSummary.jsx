import React from 'react'
import { FaBuilding } from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <div className="">
      <AdminSummary icon={<FaBuilding />} text="Total employess" number="20"/>
      </div>
    </div>
  )
}

export default AdminSummary
