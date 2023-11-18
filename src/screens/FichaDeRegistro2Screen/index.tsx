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

export const FichaDeRegistro2Screen = () => {
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
                    <p>Tipo doc</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>Registrado por</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>Curso</p>
                    <input type="text" />
                  </section>
                </FormInfosLines>
                <FormInfosLines>
                  <section>
                    <p>N de matricula</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>Observações</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>N de CI</p>
                    <input type="text" />
                  </section>
                </FormInfosLines>
              </FormInfos>
              <FormResumo>
                <p>Assunto</p>
                <textarea></textarea>
              </FormResumo>
            </Form>
            <Form>
              <FormInfos>
                <FormInfosLines>
                  <section>
                    <p>Órgão</p>
                    <input type="text" />
                  </section>
                  <section>
                    <p>Encaminhado</p>
                    <input type="text" />
                  </section>
                  <FormResumo>
                    <p>Assunto</p>
                    <textarea
                      style={{ height: "100px", width: "300px" }}
                    ></textarea>
                  </FormResumo>
                </FormInfosLines>
              </FormInfos>

              <input type="button" value="Enviar" style={{ padding: "10px" }} />
            </Form>
          </FormContent>
        </FormContainer>
      </RegistroBodyContainer>
    </RegistroScreenContainer>
  );
};
