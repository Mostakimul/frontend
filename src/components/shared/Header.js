import {
  Navbar,
  NavItemContainer,
  NavItem,
  NavLink,
  NavLogo,
} from '../styles/Navbar.styles';
const Header = () => {
  return (
    <Navbar>
      <NavLogo>
        <NavLink to="/">Task Manager</NavLink>
      </NavLogo>
      <NavItemContainer>
        <NavItem>
          <NavLink to="login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="register">Register</NavLink>
        </NavItem>
      </NavItemContainer>
    </Navbar>
  );
};

export default Header;
