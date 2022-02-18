import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-radius: 1rem;
`;

export const NavLogo = styled.div`
  padding: 0 1rem;
`;

export const NavItemContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const NavItem = styled.li`
  margin-left: 2rem;
  list-style: none;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.6rem;
  color: #000;

  &:hover {
    color: #777;
  }
`;

// .header ul li a svg {
//   margin-right: 5px;
// }

// .heading {
//   font-size: 2rem;
//   font-weight: 700;
//   margin-bottom: 50px;
//   padding: 0 20px;
// }

// .heading p {
//   color: #828282;
// }
