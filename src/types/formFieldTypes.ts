import { ButtonBlockProps } from "./buttonTypes";

export type PageType = "login" | "esqueceuSenha" | "redefinicaoDeSenha";

export interface FormFieldProps {
  pageType: PageType;
  pageButton: ButtonBlockProps;
  bottomTextContent: string;
  titleText: string;
  paragraphText: string;
}
