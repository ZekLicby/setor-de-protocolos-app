import { theme } from "@/styles/themes/themes";
import { PageType } from "@/types/formFieldTypes";
import styled from "styled-components";

interface FormTitleProps {
  pageType: PageType;
}

export const FormFieldContainer = styled.form`
  background-color: ${theme.colors.neutral["white"]};
  padding: 40px 110px 190px 110px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 80px;
`;

export const TitleAndParagraph = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 32px;
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

export const LoginInputs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
