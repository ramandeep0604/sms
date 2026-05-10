import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import AdminDashboard from '../pages/dashboard/AdminDashboard';
import ResidentDashboard from '../pages/dashboard/ResidentDashboard';
import GuardDashboard from '../pages/dashboard/GuardDashboard';

import ProtectedRoutes from '../pages/dashboard/ProtectedRoutes';
import OpenRoutes from '../pages/dashboard/OpenRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route element={<OpenRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes by Role */}
      <Route element={<ProtectedRoutes allowedRoles={['admin']} />}>
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['resident']} />}>
        <Route path="/residentdashboard" element={<ResidentDashboard />} />
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={['guard']} />}>
        <Route path="/guarddashboard" element={<GuardDashboard />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRoutes
