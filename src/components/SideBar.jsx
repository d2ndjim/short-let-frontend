import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaSignInAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <FaTh />,
      end: true,
    },
    {
      path: '/register',
      name: 'Register',
      icon: <FaUserAlt />,
      end: false,
    },
    {
      path: '/login',
      name: 'Login',
      icon: <FaSignInAlt />,
      end: false,
    },
  ];
  return (

    <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
      <div className="top_section">
        <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
          Logo
        </h1>
        <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link text-decoration-none"
          end={item.end}
        >
          <div className="icon">{item.icon}</div>
          <div
            style={{ display: isOpen ? 'block' : 'none' }}
            className="link_text"
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>

  );
};

export default Sidebar;
