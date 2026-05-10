import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/AuthSlice'
import { useNavigate } from 'react-router-dom';

const LayoutWrapper = ({ navItems, roleTitle, roleIcon, userName, children, onLogoutOverride }) => {
  const [activeItem, setActiveItem] = useState(navItems.length > 0 ? navItems[0].id : '');
  const navigate = useNavigate();
const dispatch = useDispatch();
  // const handleLogout = () => {
  //  dispatch(logout());
  //   // Clear any authentication tokens from local storage or session storage
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
    
  //   // Redirect to login page
  //   navigate('/login');
  // };
  const handleLogout = async () => {

    await dispatch(logout());

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/login');
  };


  const activeNavItem = navItems.find(item => item.id === activeItem);

  return (
    <div className="flex" style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <Sidebar 
        navItems={navItems} 
        roleTitle={roleTitle}
        roleIcon={roleIcon}
        activeItem={activeItem}
        onNavItemClick={setActiveItem}
        onLogout={handleLogout}
      />

      {/* Main Content Area Wrapper */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* Top Navbar */}
        <Navbar 
          activeItemLabel={activeNavItem ? activeNavItem.label : 'Dashboard'} 
          userName={userName}
        />
        
        {/* Scrollable Main Content */}
        <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
          {/* We pass the activeItem to the children to dynamically render the corresponding section */}
          {typeof children === 'function' ? children({ activeItem }) : children}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
