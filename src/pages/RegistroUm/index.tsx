// index.tsx
import React, { useState } from 'react';
import styles from './styles';

const RegistroUm: React.FC = () => {
  const [requerente, setRequerente] = useState('');
  const [ra, setRA] = useState('');
  const [endereco, setEndereco] = useState('');
  const [curso, setCurso] = useState('');
  const [fone, setFone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [resumo, setResumo] = useState('');

  const [orgao, setOrgao] = useState('');
  const [encaminhado, setEncaminhado] = useState('');
  const [anotacoes, setAnotacoes] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      requerente,
      ra,
      endereco,
      curso,
      fone,
      assunto,
      resumo,
      orgao,
      encaminhado,
      anotacoes,
    });
  };

  return (
    <div style={styles.protocoloFormContainer}>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <div style={styles.section}>
          <h2>Ficha de Registro 1</h2>
          <label style={styles.label}>Requerente:</label>
          <input
            type="text"
            value={requerente}
            onChange={(e) => setRequerente(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>RA:</label>
          <input
            type="text"
            value={ra}
            onChange={(e) => setRA(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Endereço Completo:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Curso:</label>
          <input
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Fone:</label>
          <input
            type="text"
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Assunto:</label>
          <input
            type="text"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Resumo Final:</label>
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <div style={styles.section}>
          <h2>Tramitação</h2>
          <label style={styles.label}>Órgão:</label>
          <input
            type="text"
            value={orgao}
            onChange={(e) => setOrgao(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Encaminhado (data):</label>
          <input
            type="text"
            value={encaminhado}
            onChange={(e) => setEncaminhado(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Anotações:</label>
          <textarea
            value={anotacoes}
            onChange={(e) => setAnotacoes(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export { RegistroUm };
