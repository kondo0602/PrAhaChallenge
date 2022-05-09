import React, { FC } from 'react';

const style: React.CSSProperties = {
  color: 'rgba(31, 41, 55)',
  marginLeft: '1rem',
  marginRight: '1rem',
  textDecoration: 'none',
};

const Header: FC<{ text: string }> = ({ text }) => {
  return (
    <a href="#" style={style}>
      {text}
    </a>
  );
};

export default Header;
