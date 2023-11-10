import { FormFieldProps } from "@/types/formFieldTypes";
import { ButtonBlock } from "../ButtonBlock";
import {
  BottomText,
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

export const FormField = ({
  pageType,
  pageButton,
  bottomTextContent,
  titleText,
  paragraphText,
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
        <ButtonBlock {...pageButton} />
        <BottomText>
          {bottomTextContent}
        </BottomText>
      </FormArea>
    </FormFieldContainer>
  );
};
