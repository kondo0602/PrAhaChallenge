import React, { FC } from 'react';
import CardTitle from '../atoms/card-title';
import RecentPostCard from './recent-post-card';

const style: React.CSSProperties = {
  paddingLeft: '2rem',
  paddingRight: '2rem',
};

const RecentPost: FC<{
  cardTitle: string;
  recentPostTag: string;
  recentPostContent: string;
  imgPath: string;
  recentPostAuthorName: string;
  recentPostPostedAt: string;
}> = ({
  cardTitle,
  recentPostTag,
  recentPostContent,
  imgPath,
  recentPostAuthorName,
  recentPostPostedAt,
}) => {
  return (
    <div style={style}>
      <CardTitle cardTitle={cardTitle} />
      <RecentPostCard
        recentPostTag={recentPostTag}
        recentPostContent={recentPostContent}
        imgPath={imgPath}
        recentPostAuthorName={recentPostAuthorName}
        recentPostPostedAt={recentPostPostedAt}
      />
    </div>
  );
};

export default RecentPost;
