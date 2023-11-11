import { FormFieldProps } from "@/types/formFieldTypes";
import { ButtonBlock } from "../ButtonBlock";
import {
  FormArea,
  FormFieldContainer,
  FormParagraph,
  FormTitle,
  LoginInputs,
  TitleAndParagraph,
} from "./styles";
import Image from "next/image";
import unicapLogo from "../../../public/unicap-logo.png";
import { InputBlock } from "../InputBlock";
import { UserIcon } from "@/icons/userIcon";
import { LockIcon } from "@/icons/lockIcon";
import Link from "next/link";
import { EmailIcon } from "@/icons/emailIcon";
import { KeyIcon } from "@/icons/keyIcon";

export const FormField = ({
  pageType,
  pageButton,
  bottomTextContent,
  titleText,
  paragraphText,
  linkTo,
}: FormFieldProps) => {
  return (
    <FormFieldContainer>
      <Image src={unicapLogo} alt="Unicap logo" />
      <FormArea>
        <TitleAndParagraph>
          <FormTitle pageType={pageType}>{titleText}</FormTitle>
          <FormParagraph>{paragraphText}</FormParagraph>
        </TitleAndParagraph>
        {pageType === "login" && (
          <LoginInputs>
            <InputBlock
              externalIcon={<UserIcon />}
              placeholder="Nº de matrícula"
              padding="12px 16px"
              height={48}
              width={330}
            />
            <InputBlock
              type="password"
              externalIcon={<LockIcon />}
              placeholder="****************"
              width={330}
            />
          </LoginInputs>
        )}
        {pageType === "esqueceuSenha" && (
          <InputBlock
            externalIcon={<EmailIcon />}
            placeholder="Digite seu email"
            width={330}
            padding="12px 16px"
          />
        )}
        {pageType === "redefinicaoDeSenha" && (
          <LoginInputs>
            <InputBlock
              externalIcon={<KeyIcon />}
              placeholder="Digite sua nova senha"
              width={330}
              padding="12px 16px"
            />
            <InputBlock
              externalIcon={<KeyIcon />}
              placeholder="Confirme sua senha"
              width={330}
              padding="12px 16px"
            />
          </LoginInputs>
        )}
        <ButtonBlock {...pageButton} />
        <Link href={linkTo}>{bottomTextContent}</Link>
      </FormArea>
    </FormFieldContainer>
  );
};
