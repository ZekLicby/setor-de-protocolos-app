// styles.ts
import { CSSProperties } from 'react';

export interface Styles {
  header: CSSProperties;
  navList: CSSProperties;
  navItem: CSSProperties;
  navLink: CSSProperties;
}

const styles: Styles = {
  header: {
    backgroundColor: '#D9D9D9',
    padding: '10px',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  },
};

export default styles;
