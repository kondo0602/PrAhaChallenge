import React, { FC } from 'react';

const style: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: '1.25rem',
  color: 'rgba(75, 85, 99, 1)',
};

const RecentPostPostedAt: FC<{ recentPostPostedAt: string }> = ({
  recentPostPostedAt,
}) => {
  return <span style={style}>{recentPostPostedAt}</span>;
};

export default RecentPostPostedAt;
