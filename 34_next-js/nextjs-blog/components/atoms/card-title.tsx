import React, { FC } from 'react';

const style: React.CSSProperties = {
  marginBottom: '1rem',
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: '700',
  color: 'rgba(55, 65, 81, 1)',
};

const CardTitle: FC<{ cardTitle: string }> = ({ cardTitle }) => {
  return <h1 style={style}>{cardTitle}</h1>;
};

export default CardTitle;
