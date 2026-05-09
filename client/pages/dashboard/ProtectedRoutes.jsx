// import React from 'react'
// import Cookies from 'js-cookie'
// import { Navigate, Outlet } from 'react-router-dom'

// const ProtectedRoutes = () => {
//     const isAuthenticated = Cookies.get('isAuthenticated')

//     console.log(isAuthenticated)

//     if (!isAuthenticated) {
//         return <Navigate to='/login' />
//     }

//     return <Outlet />
// }

// export default ProtectedRoutes

import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const isAuthenticated = Cookies.get('isAuthenticated')

  console.log(isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoutes

