import React, { FC } from 'react';

const style: React.CSSProperties = {
  marginLeft: '0.75rem',
  marginRight: '0.75rem',
  fontSize: '0.75rem',
  lineHeight: '1.25rem',
  color: 'rgba(55, 65, 81, 1)',
  textDecoration: 'none',
};

const RecentPostAuthorName: FC<{ recentPostAuthorName: string }> = ({
  recentPostAuthorName,
}) => {
  return (
    <a href="#" style={style}>
      {recentPostAuthorName}
    </a>
  );
};

export default RecentPostAuthorName;
