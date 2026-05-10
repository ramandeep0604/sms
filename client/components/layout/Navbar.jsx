import React from 'react';

const Navbar = ({ activeItemLabel, userName }) => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 30px', 
        backgroundColor: 'var(--surface)', 
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-primary)' }}>
          {activeItemLabel}
        </h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          style={{ 
            backgroundColor: 'transparent', 
            color: 'var(--text-secondary)', 
            border: 'none', 
            boxShadow: 'none', 
            padding: '8px', 
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
          title="Notifications"
        >
          🔔
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              {userName || 'User'}
            </p>
          </div>
          <div 
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary-light)', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: 'bold' 
            }}
          >
            {userName ? userName.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
