import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice.js';
import {
  Navbar,
  NavItem,
  NavItemContainer,
  NavLink,
  NavLogo,
} from '../styles/Navbar.styles';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <Navbar>
      <NavLogo>
        <NavLink to="/">Task Manager</NavLink>
      </NavLogo>
      <NavItemContainer>
        {!!user ? (
          <NavItem>
            <NavLink onClick={onLogout} to="#">
              Logout
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <NavLink to="login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="register">Register</NavLink>
            </NavItem>
          </>
        )}
      </NavItemContainer>
    </Navbar>
  );
};

export default Header;
