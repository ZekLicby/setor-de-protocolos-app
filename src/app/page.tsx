import { redirect } from "next/navigation";

export default function Home() {
  const route = redirect("/registro");

  return <h1>Bem vindo ao projeto do setor de protocolos da UNICAP!</h1>;
}
