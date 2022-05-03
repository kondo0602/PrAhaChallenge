import React, { FC } from 'react';

const style: React.CSSProperties = {
  font: 'bold',
  color: 'rgba(75, 85, 99)',
};

const UserName: FC<{ userName: string }> = ({ userName }) => {
  return <h1 style={style}>{userName}</h1>;
};

export default UserName;
