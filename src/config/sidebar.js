import {
  FaTh,
  FaUserAlt,
  FaSignInAlt,
  FaUser,
  FaBuilding,
} from 'react-icons/fa';

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
    protected: false,
  },
  {
    path: '/login',
    name: 'Login',
    icon: <FaSignInAlt />,
    end: false,
    protected: false,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: <FaUser />,
    end: false,
    protected: true,
  },
  {
    path: '/halls',
    name: 'Halls',
    icon: <FaBuilding />,
    end: false,
    protected: true,
  },

];

export default menuItem;
