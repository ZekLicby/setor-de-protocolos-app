// @/components/Navbar/index.tsx
import React from 'react';
import { ConsultNavbarItem, NavbarContainer, ProfileNavbarItem, RegisterNavbarItem, HomeNavbarItem } from './style';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <HomeNavbarItem isHome>
        <img src="../../images/home.png"/>
        <span>Home</span>
      </HomeNavbarItem>

      <ProfileNavbarItem isProfile>
        <img src="../../images/profile.png"/>
        <span>Profile</span>
      </ProfileNavbarItem>

      <RegisterNavbarItem isRegister>
        <img src="../../images/register.png"/>
        <span>Register</span>
      </RegisterNavbarItem>

      <ConsultNavbarItem isConsult>
        <img src="../../images/consult.png"/>
        <span>Consult</span>
      </ConsultNavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
