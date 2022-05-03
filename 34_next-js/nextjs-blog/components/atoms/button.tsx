import React, { FC } from "react";

const style: React.CSSProperties = {
  padding: '0.5rem',
  font: 'bold',
  color: 'white',
  background: 'rgba(75, 85, 99)',
  borderRadius: '0.25em',
}

const Button: FC<{ message: string }> = ({ message }) => {
  return (
  <a style={style}>{message}</a>
  )
};

export default Button;
