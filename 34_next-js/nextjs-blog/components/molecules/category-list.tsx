import React, { FC } from 'react';
import CategoryItem from '../atoms/category-item';

const CategoryList: FC<{ categoryItems: string[] }> = ({ categoryItems }) => {
  return (
    <ol>
      {categoryItems.map((c) => {
        return <CategoryItem categoryItem={c} />;
      })}
    </ol>
  );
};

export default CategoryList;
