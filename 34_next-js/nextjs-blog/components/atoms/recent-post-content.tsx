import React, { FC } from 'react';

const outerStyle: React.CSSProperties = {
  marginTop: '1rem',
};

const innerStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: '500',
  color: 'rgba(55, 65, 81, 1)',
  textDecoration: 'none',
};

const RecentPostContent: FC<{ recentPostContent: string }> = ({
  recentPostContent,
}) => {
  return (
    <div style={outerStyle}>
      <a href="#" style={innerStyle}>
        {recentPostContent}
      </a>
    </div>
  );
};

export default RecentPostContent;
