import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  role: "student",   // ✅ add role here
  flatId: "",
});
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   roleId: "",
  //   flatId: "",
  // });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      alert(res.data.message);

      // 👉 Redirect to login after successful register
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-300 tracking-wide">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

         <select
  name="role"
  value={form.role}
  onChange={handleChange}
  className="w-full px-4 py-2 bg-white/20 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
>
  <option  className=" text-black"value="resident">Resident</option>
  <option className=" text-black" value="admin">Admin</option>
  <option className=" text-black" value="security_guard">SecurityGuard</option>

</select>

          <input
            name="flatId"
            placeholder="Flat ID"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black py-2 rounded-lg font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Register
          </button>
        </form>

        {/* 🔁 Login Redirect */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-yellow-300 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;