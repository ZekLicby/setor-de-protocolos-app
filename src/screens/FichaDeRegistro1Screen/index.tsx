import { Header } from "@/components/Header";
import {
  Ficha,
  Form,
  FormContainer,
  FormContent,
  FormInfos,
  FormInfosLines,
  FormResumo,
  FormTitle,
  RegistroBodyContainer,
  RegistroScreenContainer,
} from "./styles";
import Link from "next/link";

export const FichaDeRegistro1Screen = () => {
  return (
    <RegistroScreenContainer>
      <Header headerTitle="DIRETORIA DE GESTÃO ESCOLAR" />
      <RegistroBodyContainer>
        <FormContainer>
          <FormTitle>Ficha de registro</FormTitle>
          <FormContent>
            <Form>
              <FormInfos>
                <FormInfosLines>
                  <section>
                    <p>Requerente</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>RA</p>
                    <input type="text" />
                  </section>
                </FormInfosLines>
                <FormInfosLines>
                  <section>
                    <p>Endereço completo</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>Curso</p>
                    <input type="text" />
                  </section>
                </FormInfosLines>
                <FormInfosLines>
                  <section>
                    <p>Fone</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>Assunto</p>
                    <input type="text" />
                  </section>
                </FormInfosLines>
              </FormInfos>
              <FormResumo>
                <p>Resumo final</p>
                <textarea></textarea>
              </FormResumo>
              <input type="button" value="Enviar" style={{ padding: "10px" }} />
            </Form>
          </FormContent>
        </FormContainer>
      </RegistroBodyContainer>
    </RegistroScreenContainer>
  );
};
