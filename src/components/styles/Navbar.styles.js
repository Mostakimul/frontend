import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 10px;
`;

export const NavLogo = styled.div`
  padding: 0 10px;
`;

export const NavItemContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const NavItem = styled.li`
  margin-left: 20px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

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
