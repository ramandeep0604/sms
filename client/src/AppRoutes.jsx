// import React from 'react'
// import { Routes, Route } from "react-router-dom";
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
// import AdminDashboard from '../pages/dashboard/AdminDashboard';
// import ProtectedRoutes from '../pages/dashboard/ProtectedRoutes';
// import { OpenRoutes } from '../pages/dashboard/OpenRoutes';


// const AppRoutes = () => {
//   return (
//     <div>
//       <Routes>
//         <Route element={<OpenRoutes/>}>
//         <Route path = '/login' element={<Login/>}/>
//         </Route>
//         <Route path = '/register' element={<Register/>}/>
//         <Route element={<ProtectedRoutes/>}>
//         <Route path = '/admindashboard' element={<AdminDashboard/>}/>
// </Route>

//       </Routes>
//     </div>
//   )
// }

// export default AppRoutes

import React from 'react'
import { Routes, Route } from "react-router-dom";

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import AdminDashboard from '../pages/dashboard/AdminDashboard';

import ProtectedRoutes from '../pages/dashboard/ProtectedRoutes';
import OpenRoutes from '../pages/dashboard/OpenRoutes';

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<OpenRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes

