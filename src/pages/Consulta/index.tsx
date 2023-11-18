import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import {
  ConsultaBodyConsultasContainer,
  ConsultaBodyContainer,
  ConsultaContainer,
  Consultas,
} from "./styles";

function Consulta() {
  return (
    <ConsultaContainer>
      <Navbar />
      <ConsultaBodyContainer>
        <Header />
        <ConsultaBodyConsultasContainer>
          <Consultas>
            <p>Requerimento 1</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
          <Consultas>
            <p>Requerimento 2</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
          <Consultas>
            <p>Requerimento 3</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
          <Consultas>
            <p>Requerimento 4</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
          <Consultas>
            <p>Requerimento 5</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
          <Consultas>
            <p>Requerimento 6</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
          <Consultas>
            <p>Requerimento 7</p>
            <p>07/10/2023 08:30PM</p>
          </Consultas>
        </ConsultaBodyConsultasContainer>
      </ConsultaBodyContainer>
    </ConsultaContainer>
  );
}

export default Consulta;
