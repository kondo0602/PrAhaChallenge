import React, { FC } from "react";

const style: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: '700',
  color: 'rgba(55, 65, 81)'
}

const Title: FC<{ text: string }> = ({ text }) => {
  return (
  <a style={style}>{text}</a>
  )
};

export default Title;
