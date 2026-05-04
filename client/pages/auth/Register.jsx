import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "resident",
    flatId: "",
  });

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
              Join your community platform. Connect, engage, and manage seamlessly.
            </p>
            <div className="login-features">
              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div className="login-feature-text">
                  <h3>Seamless Onboarding</h3>
                  <p>Register once and gain access to all your property services instantly.</p>
                </div>
              </div>
              <div className="login-feature-item">
                <div className="login-feature-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                </div>
                <div className="login-feature-text">
                  <h3>Secure Verification</h3>
                  <p>Your data is encrypted and validated for maximum privacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Register Form */}
        <div className="login-right">
          {/* Subtle grid background for the right side */}
          <div className="login-grid-bg"></div>
          
          <div className="login-form-card" style={{ maxWidth: '30rem' }}>
            
            <div className="login-form-header" style={{ marginBottom: '1.5rem' }}>
              <h2>Create Account</h2>
              <p>Please enter your details to register.</p>
            </div>

            <form onSubmit={handleSubmit}>
              
              <div className="login-form-group" style={{ marginBottom: '1rem' }}>
                <label className="login-label" style={{ marginBottom: '0.25rem' }}>Full Name</label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </div>
              </div>

              <div className="login-form-group" style={{ marginBottom: '1rem' }}>
                <label className="login-label" style={{ marginBottom: '0.25rem' }}>Email Address</label>
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

              <div className="login-form-group" style={{ marginBottom: '1rem' }}>
                <label className="login-label" style={{ marginBottom: '0.25rem' }}>Phone Number</label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    onChange={handleChange}
                    className="login-input"
                    required
                  />
                </div>
              </div>

              <div className="login-form-group" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label className="login-label" style={{ marginBottom: '0.25rem' }}>Role</label>
                  <div className="login-input-wrapper">
                    <div className="login-input-icon">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="login-input"
                      style={{ appearance: 'none' }}
                      required
                    >
                      <option value="resident" style={{ color: 'black' }}>Resident</option>
                      <option value="admin" style={{ color: 'black' }}>Admin</option>
                      <option value="security_guard" style={{ color: 'black' }}>Security Guard</option>
                    </select>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <label className="login-label" style={{ marginBottom: '0.25rem' }}>Flat ID</label>
                  <div className="login-input-wrapper">
                    <div className="login-input-icon">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <input
                      name="flatId"
                      type="text"
                      placeholder="e.g. A-101"
                      onChange={handleChange}
                      className="login-input"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="login-submit-btn"
                style={{ marginTop: '1rem' }}
              >
                Register
              </button>
            </form>

            <div className="login-register-link" style={{ marginTop: '1.5rem' }}>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>
                Login Here
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;