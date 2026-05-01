import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <Routes>
     <Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;