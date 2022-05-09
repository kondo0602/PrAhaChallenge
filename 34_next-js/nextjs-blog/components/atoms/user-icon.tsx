import React, { FC } from 'react';

const style: React.CSSProperties = {
  objectFit: 'cover',
  width: '2.5rem',
  height: '2.5rem',
  margin: '1rem',
  borderRadius: '9999px',
  display: 'block',
};

const UserIcon: FC<{ imgPath: string }> = ({ imgPath }) => {
  return <img src="/images/sample1.png" alt="avatar" style={style} />;
};

export default UserIcon;
