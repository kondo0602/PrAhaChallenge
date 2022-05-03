import React, { FC } from 'react';

const navStyle: React.CSSProperties = {
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  background: 'rgba(255, 255, 255)',
  alignItems: 'center',
  boxShadow: 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
};

const outerStyle: React.CSSProperties = {
  maxWidth: '768px',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const style1: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  color: 'rgba(31, 41, 55)',
  fontWeight: '700',
};

const style2: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '-1rem',
  marginRight: '-1rem',
};

const style3: React.CSSProperties = {
  color: 'rgba(31, 41, 55)',
  marginLeft: '1rem',
  marginRight: '1rem',
};

const Header: FC = () => {
  return (
    <nav style={navStyle}>
      <div style={outerStyle}>
        <div>
          <a href="#" style={style1}>
            Brand
          </a>
        </div>
        <div style={style2}>
          <a href="#" style={style3}>
            Home
          </a>
          <a href="#" style={style3}>
            Blog
          </a>
          <a href="#" style={style3}>
            About us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
