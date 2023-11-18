import { Header } from "@/components/Header";
import {
  ConsultaBodyConsultasContainer,
  ConsultaBodyContainer,
  Consultas,
} from "./styles";

export const ConsultaScreen = () => {
  return (
    <ConsultaBodyContainer>
      <Header hasFilter={true} headerTitle="DIRETORIA DE GESTÃO ESCOLAR" />
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
  );
};
