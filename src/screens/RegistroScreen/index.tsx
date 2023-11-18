import { Header } from "@/components/Header";
import {
  Ficha,
  RegistroBodyContainer,
  RegistroScreenContainer,
} from "./styles";
import Link from "next/link";

export const RegistroScreen = () => {
  return (
    <RegistroScreenContainer>
      <Header headerTitle="DIRETORIA DE GESTÃO ESCOLAR" />
      <RegistroBodyContainer>
        <Link href="/ficha-de-registro-1">
          <Ficha>FICHA DE REGISTRO 1 </Ficha>
        </Link>
        <Link href="/ficha-de-registro-2">
          <Ficha>FICHA DE REGISTRO 2 </Ficha>
        </Link>
      </RegistroBodyContainer>
    </RegistroScreenContainer>
  );
};
