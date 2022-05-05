import React, { FC } from 'react';
import CardTitle from '../atoms/card-title';
import AuthorCard from '../organisms/author-card';

const style: React.CSSProperties = {
  paddingLeft: '2rem',
  paddingRight: '2rem',
};

const Authors: FC<{
  cardTitle: string;
  imgPath: string;
  authorName: string;
  authorPostCount: number;
}> = ({ cardTitle, imgPath, authorName, authorPostCount }) => {
  return (
    <div style={style}>
      <CardTitle cardTitle={cardTitle} />
      <AuthorCard
        imgPath={imgPath}
        authorName={authorName}
        authorPostCount={authorPostCount}
      />
    </div>
  );
};

export default Authors;
