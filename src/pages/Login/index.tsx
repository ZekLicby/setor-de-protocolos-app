import { FormField } from "@/components/FormField";
import { LoginContainer } from "./styles";
import { theme } from "@/styles/themes/themes";
import { ButtonBlockProps } from "@/types/buttonTypes";

const Login = () => {
  const LoginButton: ButtonBlockProps = {
    textContent: "Entrar",
    backgroundColor: theme.colors.primary["100"],
    border: { borderColor: "", borderStyle: "hidden", borderWidth: 0 },
    borderRadius: 4,
    padding: "10px",
    fontColor: theme.colors.neutral.white,
    height: 48,
    width: 370,
    onClick: () => {
      console.log("Teste completo com sucesso!");
    },
  };

  return (
    <LoginContainer>
      <FormField
        titleText="Bem vindo(a)!"
        paragraphText="Realize login na sua conta"
        bottomTextContent="Esqueceu a senha?"
        pageType={"login"}
        pageButton={LoginButton}
        linkTo="/esqueci-minha-senha"
      />
    </LoginContainer>
  );
};

export default Login;
