import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({ allowedRoles }) => {
  const isAuthenticated = Cookies.get('isAuthenticated');
  const role = Cookies.get('role');

  console.log('Protected Route Auth:', isAuthenticated, 'Role:', role);

  if (!isAuthenticated || isAuthenticated === 'false') {
    return <Navigate to="/login" replace />
  }

  // Check if the user's role is allowed for this route
  if (allowedRoles && !allowedRoles.includes(role)) {
    // If not allowed, redirect to their proper dashboard
    if (role === 'admin') return <Navigate to="/admindashboard" replace />
    if (role === 'resident') return <Navigate to="/residentdashboard" replace />
    if (role === 'guard') return <Navigate to="/guarddashboard" replace />
    
    // Fallback if role is unknown
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoutes
