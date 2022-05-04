import React, { FC } from 'react';

const style: React.CSSProperties = {
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  fontWeight: '700',
  color: 'rgba(243, 244, 246, 1)',
  backgroundColor: 'rgba(75, 85, 99)',
  borderRadius: '0.25em',
};

const Button: FC<{ message: string }> = ({ message }) => {
  return <a style={style}>{message}</a>;
};

export default Button;
