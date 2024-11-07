import React from 'react';
import '../styles/Header.css';

function Header({text}) {
  return (
    <div>
      <h1 className="header-text" dangerouslySetInnerHTML={{__html: text}} />
    </div>
  );
}

export default Header;
