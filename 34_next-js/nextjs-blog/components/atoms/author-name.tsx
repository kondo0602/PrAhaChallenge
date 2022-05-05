import React, { FC } from 'react';

const style: React.CSSProperties = {
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: '700',
  color: 'rgba(55, 65, 81, 1)',
  textDecoration: 'none',
};

const AuthorName: FC<{ authorName }> = ({ authorName }) => {
  return (
    <a href="#" style={style}>
      {authorName}
    </a>
  );
};

export default AuthorName;
