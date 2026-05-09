import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens from local storage or session storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="flex" style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      
      {/* Sidebar */}
      <div 
        style={{ 
          width: '260px', 
          backgroundColor: 'var(--surface)', 
          borderRight: '1px solid var(--border)', 
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          height: '100vh'
        }}
      >
        <div>
          <div className="mb-lg flex flex-center gap-sm">
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
              A
            </div>
            <h2 style={{ color: 'var(--primary-dark)' }}>Admin Panel</h2>
          </div>
          
          <div className="flex" style={{ flexDirection: 'column', gap: '8px' }}>
            <button style={{ textAlign: 'left', backgroundColor: 'var(--primary-light)', color: 'white', fontWeight: '600' }}>
              📊 Dashboard
            </button>
            <button style={{ textAlign: 'left', backgroundColor: 'transparent', color: 'var(--text-secondary)', border: 'none', boxShadow: 'none' }}>
              👥 Manage Residents
            </button>
            <button style={{ textAlign: 'left', backgroundColor: 'transparent', color: 'var(--text-secondary)', border: 'none', boxShadow: 'none' }}>
              🛡️ Security Guards
            </button>
            <button style={{ textAlign: 'left', backgroundColor: 'transparent', color: 'var(--text-secondary)', border: 'none', boxShadow: 'none' }}>
              📝 Complaints
            </button>
            <button style={{ textAlign: 'left', backgroundColor: 'transparent', color: 'var(--text-secondary)', border: 'none', boxShadow: 'none' }}>
              💰 Finances
            </button>
          </div>
        </div>

        <div>
          <button 
            style={{ textAlign: 'left', backgroundColor: 'transparent', color: 'var(--text-secondary)', border: 'none', boxShadow: 'none', width: '100%' }}
          >
            ⚙️ Settings
          </button>
          <button 
            onClick={handleLogout}
            style={{ 
              width: '100%', 
              textAlign: 'center', 
              backgroundColor: '#fee2e2', 
              color: 'var(--error)', 
              marginTop: '10px',
              border: '1px solid #fca5a5'
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        <div className="flex-between mb-lg">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex gap-md">
            <button style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
              Generate Report
            </button>
            <button>Add New Resident</button>
          </div>
        </div>

        <div className="flex gap-lg mb-lg" style={{ flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: 1, minWidth: '200px' }}>
            <h3>Total Residents</h3>
            <h2 className="mt-sm text-success">1,204</h2>
            <p className="mt-sm">↑ 12% from last month</p>
          </div>
          <div className="card" style={{ flex: 1, minWidth: '200px' }}>
            <h3>Active Complaints</h3>
            <h2 className="mt-sm text-warning">15</h2>
            <p className="mt-sm">5 require immediate attention</p>
          </div>
          <div className="card" style={{ flex: 1, minWidth: '200px' }}>
            <h3>Pending Approvals</h3>
            <h2 className="mt-sm text-error">8</h2>
            <p className="mt-sm">New registration requests</p>
          </div>
          <div className="card" style={{ flex: 1, minWidth: '200px' }}>
            <h3>Maintenance Funds</h3>
            <h2 className="mt-sm text-success">$45,200</h2>
            <p className="mt-sm">Collected this month</p>
          </div>
        </div>

        <div className="flex gap-lg">
          {/* Recent Activity Table */}
          <div className="card" style={{ flex: 2 }}>
            <div className="flex-between mb-md">
              <h2>Recent Activities</h2>
              <button style={{ backgroundColor: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--border)', padding: '6px 12px' }}>
                View All
              </button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Registered as Resident</td>
                    <td>Oct 24, 2023</td>
                    <td className="text-success">Approved</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Submitted Water Complaint</td>
                    <td>Oct 23, 2023</td>
                    <td className="text-warning">Pending</td>
                  </tr>
                  <tr>
                    <td>Mike Johnson</td>
                    <td>Payment Failed</td>
                    <td>Oct 22, 2023</td>
                    <td className="text-error">Failed</td>
                  </tr>
                  <tr>
                    <td>Sarah Williams</td>
                    <td>Visitor Request</td>
                    <td>Oct 22, 2023</td>
                    <td className="text-success">Approved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions List */}
          <div className="card" style={{ flex: 1 }}>
            <h2 className="mb-md">Quick Actions</h2>
            <div className="flex" style={{ flexDirection: 'column', gap: '10px' }}>
              <button style={{ width: '100%', textAlign: 'left', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                📢 Post Announcement
              </button>
              <button style={{ width: '100%', textAlign: 'left', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                📝 Review Complaints
              </button>
              <button style={{ width: '100%', textAlign: 'left', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                ✓ Approve Registrations
              </button>
              <button style={{ width: '100%', textAlign: 'left', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                ✉️ Send Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;