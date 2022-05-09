import React, { FC } from 'react';
import CategoryList from '../molecules/category-list';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '24rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
};

const CategoryCard: FC<{ categoryItems: string[] }> = ({ categoryItems }) => {
  return (
    <div style={style}>
      <CategoryList categoryItems={categoryItems} />
    </div>
  );
};

export default CategoryCard;
