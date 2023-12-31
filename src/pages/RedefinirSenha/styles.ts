import { theme } from "@/styles/themes/themes";
import styled from "styled-components";

const RedefinirSenhaContainer = styled.section`
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: ${theme.colors.primary["100"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default RedefinirSenhaContainer;
