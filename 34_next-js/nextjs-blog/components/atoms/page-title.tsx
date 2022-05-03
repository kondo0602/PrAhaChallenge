import React, { FC } from 'react';

const style: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: '700',
  color: 'rgba(55, 65, 81)',
};

const PageTitle: FC<{ text: string }> = ({ text }) => {
  return <h1 style={style}>{text}</h1>;
};

export default PageTitle;
