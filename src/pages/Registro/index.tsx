import { RegistroScreen } from "@/screens/RegistroScreen";
import RegistroContainer from "./styles";
import Navbar from "@/components/Navbar";

function Registro() {
  return (
    <RegistroContainer>
      <Navbar />
      <RegistroScreen />
    </RegistroContainer>
  );
}

export default Registro;
