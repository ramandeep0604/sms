import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      alert(res.data.message);

      // 👉 Redirect after login
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        
        {/* Left Section - Description */}
        <div className="login-left">
          {/* Decorative background elements */}
          <div className="login-bg-shapes">
            <div className="login-shape shape-1"></div>
            <div className="login-shape shape-2"></div>
            <div className="login-shape shape-3"></div>
          </div>

          <div className="login-content">
            <div className="login-badge">
              SMS
            </div>
            <h1 className="login-title">
              Society Management System
            </h1>
            <p className="login-subtitle">
              Elevate your community management. A unified platform for seamless residential administration.
            </p>
            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div className="login-feature-text">
                  <h3>Smart Flat Management</h3>
                  <p>Organize and track all property details in one centralized dashboard.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div className="login-feature-text">
                  <h3>Resident & Visitor Tracking</h3>
                  <p>Keep your community safe and secure with real-time logging.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="login-right">
          {/* Subtle grid background for the right side */}
          <div className="login-grid-bg"></div>
          
          <div className="login-form-card">
            
            <div className="login-form-header">
              <h2>Welcome Back</h2>
              <p>Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSubmit}>
              
              <div className="login-form-group">
                <label className="login-label">Email Address</label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label className="login-label">Password</label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </div>
                <div className="login-forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button
                type="submit"
                className="login-submit-btn"
              >
                Sign In
              </button>
            </form>

            <div className="login-register-link">
              Don’t have an account?{" "}
              <span onClick={() => navigate("/register")}>
                Register Yourself
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;