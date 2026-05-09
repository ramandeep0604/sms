import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AppRoutes from "./AppRoutes";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

function App() {
  return (
   <div className="">
    {/* <Login/>
    <Register/>
    <AdminDashboard/> */}
    <AppRoutes/>
   </div>
  );
}

export default App;