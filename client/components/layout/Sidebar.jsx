import React from 'react';

const Sidebar = ({ navItems, roleTitle, roleIcon, activeItem, onNavItemClick, onLogout }) => {
  return (
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
          <div style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white', 
            fontWeight: 'bold' 
          }}>
            {roleIcon || roleTitle.charAt(0)}
          </div>
          <h2 style={{ color: 'var(--primary-dark)' }}>{roleTitle}</h2>
        </div>
        
        <div className="flex" style={{ flexDirection: 'column', gap: '8px' }}>
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavItemClick(item.id)}
              style={{ 
                textAlign: 'left', 
                backgroundColor: activeItem === item.id ? 'var(--primary-light)' : 'transparent', 
                color: activeItem === item.id ? 'white' : 'var(--text-secondary)', 
                fontWeight: activeItem === item.id ? '600' : 'normal',
                border: 'none', 
                boxShadow: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <button 
          style={{ 
            textAlign: 'left', 
            backgroundColor: 'transparent', 
            color: 'var(--text-secondary)', 
            border: 'none', 
            boxShadow: 'none', 
            width: '100%',
            padding: '10px 16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span>⚙️</span>
          <span>Settings</span>
        </button>
        <button 
          onClick={onLogout}
          style={{ 
            width: '100%', 
            textAlign: 'center', 
            backgroundColor: '#fee2e2', 
            color: 'var(--error)', 
            marginTop: '10px',
            border: '1px solid #fca5a5',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fecaca'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
