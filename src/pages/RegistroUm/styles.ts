// styles.ts
import { CSSProperties } from 'react';

export interface Styles {
  protocoloFormContainer: CSSProperties;
  form: CSSProperties;
  section: CSSProperties;
  label: CSSProperties;
  input: CSSProperties;
  textarea: CSSProperties;
  button: CSSProperties;
}

const styles: Styles = {
  protocoloFormContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
  },
  textarea: {
    marginBottom: '10px',
    padding: '5px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default styles;
