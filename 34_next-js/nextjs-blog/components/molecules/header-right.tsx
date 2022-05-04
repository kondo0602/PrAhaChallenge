import React, { FC } from 'react';
import HeaderItem from '../atoms/header-item';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '-1rem',
  marginRight: '-1rem',
};

const HeaderRight: FC<{ headerRightItems: string[] }> = ({
  headerRightItems,
}) => {
  return (
    <div style={style}>
      {headerRightItems.map((h) => {
        return <HeaderItem text={h} />;
      })}
    </div>
  );
};

export default HeaderRight;
