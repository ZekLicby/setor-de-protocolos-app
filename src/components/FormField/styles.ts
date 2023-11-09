import { theme } from "@/styles/themes/themes";
import { PageType } from "@/types/formFieldTypes";
import styled from "styled-components";

interface FormTitleProps {
  pageType: PageType;
}

export const FormFieldContainer = styled.form`
  width: 589px;
  height: 741px;
  background-color: ${theme.colors.neutral["white"]};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleAndParagraph = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h1<FormTitleProps>`
  color: ${theme.colors.neutral.black};
  font-size: ${({ pageType }) => (pageType === "login" ? "26px" : "20px")};
`;

export const FormParagraph = styled.p`
  color: ${theme.colors.neutral["010"]};
  font-size: ${theme.typography.fontSize.m};
`;

export const BottomText = styled.a`
  color: ${theme.colors.neutral["010"]};
  text-decoration: underline;
  font-size: ${theme.typography.fontSize.m};
  font-weight: ${theme.typography.fontWeight[400]};
  cursor: pointer;
`;
