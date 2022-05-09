import React, { FC } from 'react';
import HeaderLeft from '../atoms/header-left';
import HeaderRightIcon from '../molecules/header-right-icon';
import HeaderRight from '../molecules/header-right';

const navStyle: React.CSSProperties = {
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  background: 'rgba(255, 255, 255, 1)',
  boxShadow: 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
};

const style: React.CSSProperties = {
  maxWidth: '768px',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const Header: FC<{ headerLeft: string; headerRightItems: string[] }> = ({
  headerLeft,
  headerRightItems,
}) => {
  return (
    <nav style={navStyle}>
      <div style={style}>
        <HeaderLeft text={headerLeft} />
        <HeaderRightIcon />
        <HeaderRight headerRightItems={headerRightItems} />
      </div>
    </nav>
  );
};

export default Header;
