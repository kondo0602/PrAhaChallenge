import React, { FC } from 'react';

const style: React.CSSProperties = {
  color: 'rgba(59, 130, 246, 0.5)',
  textDecoration: 'none',
};

const Link: FC<{ text: string }> = ({ text }) => {
  return (
    <a href="#" style={style}>
      {text}
    </a>
  );
};

export default Link;
