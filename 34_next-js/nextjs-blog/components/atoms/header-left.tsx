import React, { FC } from 'react';

const outerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const innerStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  color: 'rgba(31, 41, 55, 1)',
  fontWeight: '700',
  textDecoration: 'none',
};

const HeaderLeft: FC<{ text: string }> = ({ text }) => {
  return (
    <div style={outerStyle}>
      <div>
        <a href="#" style={innerStyle}>
          {text}
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
