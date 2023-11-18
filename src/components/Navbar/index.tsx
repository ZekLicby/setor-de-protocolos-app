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
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <HomeNavbarItem isHome>
        <HomeIcon />
        <IconTitle>Home</IconTitle>
      </HomeNavbarItem>

      {/* <ProfileNavbarItem isProfile>
        <NavbarUserIcon />
        <IconTitle>Perfil</IconTitle>
      </ProfileNavbarItem> */}

      <Link href="/registro">
        <RegisterNavbarItem isRegister>
          <RegisterIcon />
          <IconTitle>Registro</IconTitle>
        </RegisterNavbarItem>
      </Link>

      <Link href="/consulta">
        <ConsultNavbarItem isConsult>
          <ConsultIcon />
          <IconTitle>Consulta</IconTitle>
        </ConsultNavbarItem>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
