import { ButtonBlockProps } from "@/types/buttonTypes";
import { theme } from "@/styles/themes/themes";
import { FormField } from "@/components/FormField";
import RedefinirSenhaContainer from "./styles";

const RedefinirSenha = () => {
  const LoginButton: ButtonBlockProps = {
    textContent: "Redefinir senha",
    backgroundColor: theme.colors.primary["100"],
    border: { borderColor: "", borderStyle: "hidden", borderWidth: 0 },
    borderRadius: 4,
    padding: "10px",
    fontColor: theme.colors.neutral.white,
    height: 48,
    width: 362,
    onClick: () => {
      console.log("Teste completo com sucesso!");
    },
  };

  return (
    <RedefinirSenhaContainer>
      <FormField
        titleText="Redefinição de senha"
        bottomTextContent="Cancelar"
        pageType={"redefinicaoDeSenha"}
        pageButton={LoginButton}
        linkTo="/login"
      />
    </RedefinirSenhaContainer>
  );
};

export default RedefinirSenha;
