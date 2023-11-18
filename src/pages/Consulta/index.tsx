import Navbar from "@/components/Navbar";
import ConsultaContainer from "./styles";
import { ConsultaScreen } from "@/screens/ConsultaScreen";

function Consulta() {
  return (
    <ConsultaContainer>
      <Navbar />
      <ConsultaScreen />
    </ConsultaContainer>
  );
}

export default Consulta;
