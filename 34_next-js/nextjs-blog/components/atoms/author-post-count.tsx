import React, { FC } from 'react';

const style: React.CSSProperties = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '300',
  color: 'rgba(55, 65, 81, 1)',
};

const AuthorPostCount: FC<{ authorPostCount: number }> = ({
  authorPostCount,
}) => {
  return <span style={style}>Created {authorPostCount} Posts</span>;
};

export default AuthorPostCount;
