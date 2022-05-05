import React, { FC } from 'react';
import RecentPostTag from '../atoms/recent-post-tag';
import RecentPostContent from '../atoms/recent-post-content';
import RecentPostFooter from '../molecules/recent-post-footer';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '24rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
};

const RecentPostCard: FC<{
  recentPostTag: string;
  recentPostContent: string;
  imgPath: string;
  recentPostAuthorName: string;
  recentPostPostedAt: string;
}> = ({
  recentPostTag,
  recentPostContent,
  imgPath,
  recentPostAuthorName,
  recentPostPostedAt,
}) => {
  return (
    <div style={style}>
      <RecentPostTag recentPostTag={recentPostTag} />
      <RecentPostContent recentPostContent={recentPostContent} />
      <RecentPostFooter
        imgPath={imgPath}
        recentPostAuthorName={recentPostAuthorName}
        recentPostPostedAt={recentPostPostedAt}
      />
    </div>
  );
};

export default RecentPostCard;
