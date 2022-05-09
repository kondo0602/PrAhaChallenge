import React, { FC } from 'react';
import UserIcon from '../atoms/user-icon';
import AuthorName from '../atoms/author-name';
import AuthorPostCount from '../atoms/author-post-count';

const style: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const Author: FC<{
  imgPath: string;
  authorName: string;
  authorPostCount: number;
}> = ({ imgPath, authorName, authorPostCount }) => {
  return (
    <li style={style}>
      <UserIcon imgPath={imgPath} />
      <p>
        <AuthorName authorName={authorName} />
        <AuthorPostCount authorPostCount={authorPostCount} />
      </p>
    </li>
  );
};

export default Author;
