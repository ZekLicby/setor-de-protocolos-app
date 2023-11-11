// @/components/Navbar/style.ts
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 8px;
  top: 0;
  height: 100vh;
  padding: 7px;
  background-color: #690013;
`;

export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  span {
    font-size: 12px;
  }
`;

export const HomeNavbarItem = styled(NavbarItem)<{ isHome?: boolean }>`
  margin-top: ${props => (props.isHome ? '25px' : '18px')};
`;

export const ProfileNavbarItem = styled(NavbarItem)<{ isProfile?: boolean }>`
  margin-top: ${props => (props.isProfile ? '47px' : '16px')};
`;

export const RegisterNavbarItem = styled(NavbarItem)<{ isRegister?: boolean }>`
  margin-top: ${props => (props.isRegister ? '20px' : '10px')};
`;

export const ConsultNavbarItem = styled(NavbarItem)<{ isConsult?: boolean }>`
  margin-top: ${props => (props.isConsult ? '20px' : '16px')};
`;