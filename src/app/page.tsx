/* import Image from 'next/image' Esse componente aqui é importante de se lembrar*/

import { redirect } from "next/navigation";

export default function Home() {
  const route = redirect("/login");

  return <h1>Bem vindo ao projeto do setor de protocolos da UNICAP!</h1>;
}
