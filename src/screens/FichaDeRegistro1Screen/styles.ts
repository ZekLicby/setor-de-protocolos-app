import styled from "styled-components";

export const RegistroScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegistroBodyContainer = styled.section`
  display: flex;
  /* flex-direction: column; */
  gap: 50px;
  align-items: center;
  /* justify-content: center; */
  /* margin: auto; */
`;

export const Ficha = styled.section`
  width: 791px;
  height: 149px;
  background-color: #9292921f;

  color: #690013;
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 4px;

  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  textarea {
    width: 800px;
    height: 250px;
  }

  span {
    margin-bottom: 50px;
  }
`;

export const FormContainer = styled.section`
  border-radius: 5px;
  border: 1px solid #a6a6a6;
  background: #fff;
  width: 100%;
  
`;

export const FormTitle = styled.p``;

export const FormContent = styled.section``;

export const FormInfos = styled.section``;

export const FormInfosLines = styled.section`
width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const FormInfosInput = styled.input``;

export const FormResumo = styled.section`
  textarea {
    width: 800px;
    height: 250px;
  }
`;
