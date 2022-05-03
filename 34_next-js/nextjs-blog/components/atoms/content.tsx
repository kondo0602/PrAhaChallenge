import React, { FC } from 'react';

const style: React.CSSProperties = {
  marginTop: '0.5rem',
  color: 'rgba(75, 85, 99)',
};

const Content: FC<{ text: string }> = ({ text }) => {
  return <p style={style}>{text}</p>;
};

export default Content;
