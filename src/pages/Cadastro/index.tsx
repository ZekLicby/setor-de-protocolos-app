// index.tsx
import React, { useState } from 'react';
import styles from './styles';
import {
    RegisterFormArea,
    RegisterFormFieldContainer,
    FormParagraph,
    RegisterFormTitle,
    RegisterInputs,
    TitleAndParagraph,

  } from "./styles";
  import { ButtonBlock } from "../../components/ButtonBlock";
  import { InputBlock } from "../../components/InputBlock";
  import { theme } from "@/styles/themes/themes";
  import { ButtonBlockProps } from "@/types/buttonTypes";

const Cadastro: React.FC = () => {

    const RegisterButton: ButtonBlockProps = {
        textContent: "Cadastrar",
        backgroundColor: "#690013",
        border: { borderColor: "", borderStyle: "hidden", borderWidth: 0 },
        borderRadius: 4,
        padding: "10px",
        fontColor: theme.colors.neutral.white,
        height: 48,
        width: 370,
        onClick: () => {
          console.log("Teste completo com sucesso!");
        },
      };
      const CancelButton: ButtonBlockProps = {
        textContent: "Cancelar",
        backgroundColor: "#8B642A",
        border: { borderColor: "", borderStyle: "hidden", borderWidth: 0 },
        borderRadius: 4,
        padding: "10px",
        fontColor: theme.colors.neutral.white,
        height: 48,
        width: 370,
        onClick: () => {
          console.log("Teste completo com sucesso!");
        },
      };
    
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [date, setDate] = useState('');
  const [setor, setSetor] = useState('');



  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      nome,
      matricula,
      email,
      cargo,
      date,
      setor,
    });
  };
  

  return (
    <RegisterFormFieldContainer>
        <RegisterFormArea>
        <TitleAndParagraph>
          <RegisterFormTitle>Cadastro de Colaborador</RegisterFormTitle>
        </TitleAndParagraph>
   
            <RegisterInputs>

          <label style={styles.label}>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>N de matrícula:</label>
          <input
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Cargo:</label>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            style={styles.input}
          />
          
          <label style={styles.label}>Data de Nascimento:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Setor:</label>
          <input
            type="text"
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            style={styles.input}
          />


        <ButtonBlock {...RegisterButton} />
        <ButtonBlock {...CancelButton} />
        

        </RegisterInputs>

      </RegisterFormArea>
      </RegisterFormFieldContainer>

  );
};

export default Cadastro ;
