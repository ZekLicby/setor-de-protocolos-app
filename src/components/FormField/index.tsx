import { FormFieldProps } from "@/types/formFieldTypes";
import { ButtonBlock } from "../ButtonBlock";
import {
  BottomText,
  FormFieldContainer,
  FormParagraph,
  FormTitle,
  TitleAndParagraph,
} from "./styles";

export const FormField = ({
  pageType,
  pageButton,
  bottomTextContent,
  titleText,
  paragraphText,
}: FormFieldProps) => {
  return (
    <FormFieldContainer>
      <TitleAndParagraph>
        <FormTitle pageType={pageType}>{titleText}</FormTitle>
        <FormParagraph>{paragraphText}</FormParagraph>
      </TitleAndParagraph>
      <ButtonBlock {...pageButton} />
      <BottomText>{bottomTextContent}</BottomText>
    </FormFieldContainer>
  );
};
