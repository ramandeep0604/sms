import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const OpenRoutes = () => {
  const isAuthenticated = Cookies.get('isAuthenticated');
  const role = Cookies.get('role');

  console.log('Open Route Auth:', isAuthenticated, 'Role:', role);

  // If logged in → redirect away from login/register to their proper dashboard
  if (isAuthenticated && isAuthenticated !== 'false') {
    if (role === 'admin') return <Navigate to="/admindashboard" replace />
    if (role === 'resident') return <Navigate to="/residentdashboard" replace />
    if (role === 'guard') return <Navigate to="/guarddashboard" replace />
    
    return <Navigate to="/admindashboard" replace /> // Fallback
  }

  // Otherwise show login/register pages
  return <Outlet />
}

export default OpenRoutes
