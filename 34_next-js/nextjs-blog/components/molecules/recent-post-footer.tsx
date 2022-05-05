import React, { FC } from 'react';
import UserIcon from '../atoms/user-icon';
import RecentPostAuthorName from '../atoms/recent-post-author-name';
import RecentPostPostedAt from '../atoms/recent-post-posted-at';

const outerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1rem',
};

const innerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const RecentPostFooter: FC<{
  imgPath: string;
  recentPostAuthorName: string;
  recentPostPostedAt: string;
}> = ({ imgPath, recentPostAuthorName, recentPostPostedAt }) => {
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <UserIcon imgPath={imgPath} />
        <RecentPostAuthorName recentPostAuthorName={recentPostAuthorName} />
      </div>
      <RecentPostPostedAt recentPostPostedAt={recentPostPostedAt} />
    </div>
  );
};

export default RecentPostFooter;
