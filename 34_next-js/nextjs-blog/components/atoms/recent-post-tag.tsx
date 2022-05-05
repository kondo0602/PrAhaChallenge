import React, { FC } from 'react';

const outerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const innerStyle: React.CSSProperties = {
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: 'rgba(209, 250, 229, 1)',
  backgroundColor: 'rgba(75, 85, 99, 1)',
  borderRadius: '0.25rem',
  textDecoration: 'none',
};

const PostTag: FC<{ recentPostTag: string }> = ({ recentPostTag }) => {
  return (
    <div style={outerStyle}>
      <a href="#" style={innerStyle}>
        {recentPostTag}
      </a>
    </div>
  );
};

export default PostTag;
