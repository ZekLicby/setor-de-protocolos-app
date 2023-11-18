// Carlos.Lins refatorar depois
import React from "react";
import {
  ConsultNavbarItem,
  NavbarContainer,
  ProfileNavbarItem,
  RegisterNavbarItem,
  HomeNavbarItem,
  IconTitle,
} from "./style";
import { HomeIcon } from "@/icons/homeIcon";
import { NavbarUserIcon } from "@/icons/navbarUserIcon";
import { RegisterIcon } from "@/icons/registerIcon";
import { ConsultIcon } from "@/icons/consultIcon";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <HomeNavbarItem isHome>
        <HomeIcon />
        <IconTitle>Home</IconTitle>
      </HomeNavbarItem>

      <ProfileNavbarItem isProfile>
        <NavbarUserIcon />
        <IconTitle>Perfil</IconTitle>
      </ProfileNavbarItem>

      <RegisterNavbarItem isRegister>
        <RegisterIcon />
        <IconTitle>Registro</IconTitle>
      </RegisterNavbarItem>

      <ConsultNavbarItem isConsult>
        <ConsultIcon />
        <IconTitle>Consulta</IconTitle>
      </ConsultNavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
