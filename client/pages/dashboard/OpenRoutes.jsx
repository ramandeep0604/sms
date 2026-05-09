// import React from 'react'
// import Cookies from 'js-cookie'
// import { Navigate, Outlet } from 'react-router-dom'

// export const OpenRoutes = () => {
//      const isAuthenticated = Cookies.get('isAuthenticated')

//     console.log(isAuthenticated)

//     if (!isAuthenticated) {
//         return <Navigate to='/admindashboard' />
//     }

//     return(
//         <div>
//              <Outlet />
//         </div>
//     )
// }

import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const OpenRoutes = () => {
  const isAuthenticated =
    Cookies.get('isAuthenticated') === 'true'

  console.log(isAuthenticated)

  // If logged in → go to dashboard
  if (isAuthenticated) {
    // return <Navigate to="/admindashboard" replace />
  }

  // Otherwise show login/register pages
  return <Outlet />
}

export default OpenRoutes

