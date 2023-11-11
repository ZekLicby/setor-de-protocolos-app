import { FormField } from "@/components/FormField";
import { ButtonBlockProps } from "@/types/buttonTypes";
import { theme } from "@/styles/themes/themes";
import EsqueciMinhaSenhaContainer from "./styles";

const EsqueciMinhaSenha = () => {
  const ForgotPasswordButton: ButtonBlockProps = {
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
    <EsqueciMinhaSenhaContainer>
      <FormField
        titleText="Recuperação de senha"
        paragraphText="Para redefinir sua  senha,  informe seu email cadastrado e lhe enviaremos um link com as devidas instruções."
        bottomTextContent="Cancelar"
        pageButton={ForgotPasswordButton}
        pageType="esqueceuSenha"
        linkTo="/login"
      />
    </EsqueciMinhaSenhaContainer>
  );
};

export default EsqueciMinhaSenha;
