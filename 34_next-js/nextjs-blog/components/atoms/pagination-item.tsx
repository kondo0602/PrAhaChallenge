import React, { FC } from 'react';

const style: React.CSSProperties = {
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: '500',
  color: 'rgba(107, 114, 128, 1)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.375rem',
  textDecoration: 'none',
};

const PaginationItem: FC<{ text: string }> = ({ text }) => {
  return (
    <a href="#" style={style}>
      {text}
    </a>
  );
};

export default PaginationItem;
