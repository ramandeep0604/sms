import React from 'react';
import LayoutWrapper from '../../components/layout/LayoutWrapper';

const residentNavItems = [
  { id: 'dashboard', label: 'My Dashboard', icon: '🏠' },
  { id: 'my-flat', label: 'My Flat', icon: '🔑' },
  { id: 'complaints', label: 'My Complaints', icon: '📝' },
  { id: 'visitors', label: 'Visitors', icon: '👤' },
  { id: 'payments', label: 'Payments', icon: '💳' },
];

const ResidentDashboard = () => {
  return (
    <LayoutWrapper
      navItems={residentNavItems}
      roleTitle="Resident Portal"
      roleIcon="R"
      userName="John Doe"
    >
      {({ activeItem }) => (
        <>
          {activeItem === 'dashboard' && (
            <div>
              <div className="flex-between mb-lg">
                <div>
                  <p>Welcome, John. Here is the latest from your community.</p>
                </div>
              </div>

              <div className="flex gap-lg mb-lg" style={{ flexWrap: 'wrap' }}>
                <div className="card" style={{ flex: 1, minWidth: '200px' }}>
                  <h3>Upcoming Dues</h3>
                  <h2 className="mt-sm text-error">$120.00</h2>
                  <p className="mt-sm">Due in 5 days</p>
                  <button className="mt-md" style={{ width: '100%' }}>Pay Now</button>
                </div>
                <div className="card" style={{ flex: 1, minWidth: '200px' }}>
                  <h3>Active Complaints</h3>
                  <h2 className="mt-sm text-warning">1</h2>
                  <p className="mt-sm">Plumbing issue in Kitchen</p>
                </div>
                <div className="card" style={{ flex: 1, minWidth: '200px' }}>
                  <h3>Expected Visitors</h3>
                  <h2 className="mt-sm text-success">2</h2>
                  <p className="mt-sm">Today</p>
                </div>
              </div>

              <div className="card mb-lg">
                <h2 className="mb-md">Recent Announcements</h2>
                <div style={{ padding: '15px', backgroundColor: 'var(--background)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary)' }}>
                  <h4 style={{ color: 'var(--primary-dark)' }}>Water Supply Interruption</h4>
                  <p className="mt-sm">Please note that there will be a scheduled water supply interruption on Oct 28th from 10 AM to 2 PM due to main pipe maintenance.</p>
                </div>
              </div>
            </div>
          )}

          {activeItem === 'my-flat' && (
            <div className="card">
              <h2>My Flat Details</h2>
              <p className="mt-md">Information about flat occupants, vehicles, and pets goes here.</p>
            </div>
          )}

          {activeItem === 'complaints' && (
            <div className="card">
              <div className="flex-between mb-md">
                <h2>My Complaints</h2>
                <button>Raise New Complaint</button>
              </div>
              <p className="mt-md">List of active and resolved complaints.</p>
            </div>
          )}

          {activeItem === 'visitors' && (
            <div className="card">
              <div className="flex-between mb-md">
                <h2>Manage Visitors</h2>
                <button>Pre-Approve Visitor</button>
              </div>
              <p className="mt-md">Track past and expected visitors.</p>
            </div>
          )}

          {activeItem === 'payments' && (
            <div className="card">
              <h2>Payment History</h2>
              <p className="mt-md">Invoices and payment records for maintenance and other dues.</p>
            </div>
          )}
        </>
      )}
    </LayoutWrapper>
  );
};

export default ResidentDashboard;
