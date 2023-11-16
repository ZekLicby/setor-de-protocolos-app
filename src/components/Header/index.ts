// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <App />
    </div>
  </Router>,
  document.getElementById('root')
);


export default Header;