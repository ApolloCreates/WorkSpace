import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard'
import EmployeeDashboard from './Pages/EmployeeDashboard'
import Login from './Pages/Login'
import PrivateRoutes from './Utils/PrivateRoutes'
import RoleBasedRoutes from './Utils/RoleBasedRoutes'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/admindashboard"}/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admindashboard" element={
        <PrivateRoutes>
          <RoleBasedRoutes requiredRole={["admin"]}>
          <AdminDashboard/>
          </RoleBasedRoutes>
        </PrivateRoutes>
      } />
      <Route path="/employeedashboard" element={<EmployeeDashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
