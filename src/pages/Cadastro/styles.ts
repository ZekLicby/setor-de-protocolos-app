// styles.ts
import { CSSProperties } from 'react';
import { theme } from "@/styles/themes/themes";
import styled from "styled-components";

export interface Styles {
  section: CSSProperties;
  label: CSSProperties;
  input: CSSProperties;

}

const styles: Styles = {
  section: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
    backgroundColor:"#F5F5F5" 
  }
};

export default styles;


export const RegisterFormFieldContainer = styled.form`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

export const RegisterFormArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 50px;

  a {
    color: ${theme.colors.neutral["010"]};
    text-decoration: underline;
    font-size: ${theme.typography.fontSize.m};
    font-weight: ${theme.typography.fontWeight[400]};
    cursor: pointer;
  }
`;

export const TitleAndParagraph = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 32px;
`;

export const RegisterFormTitle = styled.h1`
  color: ${theme.colors.neutral.black};
  font-size:  "26px";
`;

export const FormParagraph = styled.p`
  color: ${theme.colors.neutral["010"]};
  font-size: ${theme.typography.fontSize.m};
`;

export const RegisterInputs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;


