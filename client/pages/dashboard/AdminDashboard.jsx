import React from 'react';
import LayoutWrapper from '../../components/layout/LayoutWrapper';

const adminNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'residents', label: 'Manage Residents', icon: '👥' },
  { id: 'guards', label: 'Security Guards', icon: '🛡️' },
  { id: 'complaints', label: 'Complaints', icon: '📝' },
  { id: 'finances', label: 'Finances', icon: '💰' },
];

const AdminDashboard = () => {
  return (
    <LayoutWrapper
      navItems={adminNavItems}
      roleTitle="Admin Panel"
      roleIcon="A"
      userName="Admin User"
    >
      {({ activeItem }) => (
        <>
          {activeItem === 'dashboard' && (
            <div>
              <div className="flex-between mb-lg">
                <div>
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
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>User</th>
                          <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Action</th>
                          <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Date</th>
                          <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '12px' }}>John Doe</td>
                          <td style={{ padding: '12px' }}>Registered as Resident</td>
                          <td style={{ padding: '12px' }}>Oct 24, 2023</td>
                          <td style={{ padding: '12px' }} className="text-success">Approved</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '12px' }}>Jane Smith</td>
                          <td style={{ padding: '12px' }}>Submitted Water Complaint</td>
                          <td style={{ padding: '12px' }}>Oct 23, 2023</td>
                          <td style={{ padding: '12px' }} className="text-warning">Pending</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '12px' }}>Mike Johnson</td>
                          <td style={{ padding: '12px' }}>Payment Failed</td>
                          <td style={{ padding: '12px' }}>Oct 22, 2023</td>
                          <td style={{ padding: '12px' }} className="text-error">Failed</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px' }}>Sarah Williams</td>
                          <td style={{ padding: '12px' }}>Visitor Request</td>
                          <td style={{ padding: '12px' }}>Oct 22, 2023</td>
                          <td style={{ padding: '12px' }} className="text-success">Approved</td>
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
          )}
          
          {activeItem === 'residents' && (
            <div className="card">
              <h2>Manage Residents Section</h2>
              <p className="mt-md">This section dynamically loaded when "Manage Residents" is clicked.</p>
            </div>
          )}

          {activeItem === 'guards' && (
            <div className="card">
              <h2>Security Guards Section</h2>
              <p className="mt-md">This section dynamically loaded when "Security Guards" is clicked.</p>
            </div>
          )}

          {activeItem === 'complaints' && (
            <div className="card">
              <h2>Complaints Section</h2>
              <p className="mt-md">This section dynamically loaded when "Complaints" is clicked.</p>
            </div>
          )}

          {activeItem === 'finances' && (
            <div className="card">
              <h2>Finances Section</h2>
              <p className="mt-md">This section dynamically loaded when "Finances" is clicked.</p>
            </div>
          )}
        </>
      )}
    </LayoutWrapper>
  );
};

export default AdminDashboard;