import React, { FC } from 'react';
import CardTitle from '../atoms/card-title';
import CategoryCard from '../organisms/category-card';

const style: React.CSSProperties = {
  paddingLeft: '2rem',
  paddingRight: '2rem',
};

const Categories: FC<{ cardTitle: string; categoryItems: string[] }> = ({
  cardTitle,
  categoryItems,
}) => {
  return (
    <div style={style}>
      <CardTitle cardTitle={cardTitle} />
      <CategoryCard categoryItems={categoryItems} />
    </div>
  );
};

export default Categories;
