import styled from "styled-components";

const ConsultaContainer = styled.section`
  display: flex;
`;

const ConsultaBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ConsultaBodyConsultasContainer = styled.section`
  padding: 60px 5px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Consulta = styled.section`
  border-radius: 5px;
  background: #d9d9d9;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ConsultaElementos = {
  ConsultaContainer,
  ConsultaBodyContainer,
  ConsultaBodyConsultasContainer,
  Consulta,
};

export default ConsultaElementos;