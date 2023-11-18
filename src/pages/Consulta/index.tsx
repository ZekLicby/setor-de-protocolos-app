import { Header } from "@/components/Header";
import ConsultaElementos from "./styles";
import Navbar from "@/components/Navbar";

function Consulta() {
  return (
    <ConsultaElementos.ConsultaContainer>
      <Navbar />
      <ConsultaElementos.ConsultaBodyContainer>
        <Header />
        <ConsultaElementos.ConsultaBodyConsultasContainer>
          <ConsultaElementos.Consulta>
            <p>Requerimento 1</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
          <ConsultaElementos.Consulta>
            <p>Requerimento 2</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
          <ConsultaElementos.Consulta>
            <p>Requerimento 3</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
          <ConsultaElementos.Consulta>
            <p>Requerimento 4</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
          <ConsultaElementos.Consulta>
            <p>Requerimento 5</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
          <ConsultaElementos.Consulta>
            <p>Requerimento 6</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
          <ConsultaElementos.Consulta>
            <p>Requerimento 7</p>
            <p>07/10/2023 08:30PM</p>
          </ConsultaElementos.Consulta>
        </ConsultaElementos.ConsultaBodyConsultasContainer>
      </ConsultaElementos.ConsultaBodyContainer>
    </ConsultaElementos.ConsultaContainer>
  );
}

export default Consulta;
