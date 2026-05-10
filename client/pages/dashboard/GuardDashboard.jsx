import React from 'react';
import LayoutWrapper from '../../components/layout/LayoutWrapper';

const guardNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '🛡️' },
  { id: 'visitor-logs', label: 'Visitor Logs', icon: '📝' },
  { id: 'expected', label: 'Expected Visitors', icon: '🕒' },
  { id: 'emergency', label: 'Emergency', icon: '🚨' },
];

const GuardDashboard = () => {
  return (
    <LayoutWrapper
      navItems={guardNavItems}
      roleTitle="Security Portal"
      roleIcon="S"
      userName="Security Team"
    >
      {({ activeItem }) => (
        <>
          {activeItem === 'dashboard' && (
            <div>
              <div className="flex-between mb-lg">
                <div>
                  <p>Gate status: <span className="text-success font-bold">Secure</span></p>
                </div>
                <button style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                  Log New Visitor
                </button>
              </div>

              <div className="flex gap-lg mb-lg" style={{ flexWrap: 'wrap' }}>
                <div className="card" style={{ flex: 1, minWidth: '200px' }}>
                  <h3>Current Visitors inside</h3>
                  <h2 className="mt-sm text-warning">12</h2>
                </div>
                <div className="card" style={{ flex: 1, minWidth: '200px' }}>
                  <h3>Today's Total Entries</h3>
                  <h2 className="mt-sm text-primary">45</h2>
                </div>
                <div className="card" style={{ flex: 1, minWidth: '200px', backgroundColor: '#fee2e2', border: '1px solid #fca5a5' }}>
                  <h3 style={{ color: 'var(--error)' }}>Emergency Alert</h3>
                  <button className="mt-sm" style={{ backgroundColor: 'var(--error)', width: '100%' }}>Trigger Alarm</button>
                </div>
              </div>

              <div className="card">
                <div className="flex-between mb-md">
                  <h2>Recent Entries</h2>
                  <button style={{ backgroundColor: 'transparent', color: 'var(--primary)', border: 'none', padding: 0 }}>View All</button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                        <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Type</th>
                        <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Visiting Flat</th>
                        <th style={{ background: '#e0f2fe', padding: '12px', textAlign: 'left', fontWeight: '600' }}>Time In</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '12px' }}>Amazon Delivery</td>
                        <td style={{ padding: '12px' }}>Delivery</td>
                        <td style={{ padding: '12px' }}>A-102</td>
                        <td style={{ padding: '12px' }}>10:15 AM</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '12px' }}>Rajesh Kumar</td>
                        <td style={{ padding: '12px' }}>Guest</td>
                        <td style={{ padding: '12px' }}>B-405</td>
                        <td style={{ padding: '12px' }}>09:30 AM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeItem === 'visitor-logs' && (
            <div className="card">
              <div className="flex-between mb-md">
                <h2>Visitor Logs</h2>
                <div className="flex gap-md">
                  <input type="text" placeholder="Search logs..." style={{ padding: '8px 12px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
                  <button>Filter</button>
                </div>
              </div>
              <p className="mt-md">Complete history of all entries and exits.</p>
            </div>
          )}

          {activeItem === 'expected' && (
            <div className="card">
              <h2>Expected Visitors</h2>
              <p className="mt-md">List of visitors pre-approved by residents for today.</p>
            </div>
          )}

          {activeItem === 'emergency' && (
            <div className="card" style={{ borderColor: 'var(--error)' }}>
              <h2 className="text-error">Emergency Contacts & Protocols</h2>
              <ul className="mt-md" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}><strong>Police:</strong> 100</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}><strong>Fire:</strong> 101</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}><strong>Ambulance:</strong> 102</li>
                <li style={{ padding: '10px 0' }}><strong>Estate Manager:</strong> +91 98765 43210</li>
              </ul>
            </div>
          )}
        </>
      )}
    </LayoutWrapper>
  );
};

export default GuardDashboard;
