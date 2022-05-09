import React, { FC } from 'react';

const outerStyle: React.CSSProperties = {
  marginTop: '0.5rem',
  listStyle: 'none',
};

const innerStyle: React.CSSProperties = {
  marginLeft: '0.25rem',
  marginRight: '0.25rem',
  fontWeight: 'bold',
  color: 'rgba(55, 65, 81, 1)',
  textDecoration: 'none',
};

const CategoryItem: FC<{ categoryItem: string }> = ({ categoryItem }) => {
  return (
    <li style={outerStyle}>
      <a href="#" style={innerStyle}>
        - {categoryItem}
      </a>
    </li>
  );
};

export default CategoryItem;
