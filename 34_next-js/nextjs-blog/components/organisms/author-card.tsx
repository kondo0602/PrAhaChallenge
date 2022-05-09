import React, { FC } from 'react';
import Author from '../molecules/author';

const outerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '24rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
};

const innerStyle: React.CSSProperties = {
  marginLeft: '-1rem',
  marginRight: '-1rem',
};

const AuthorCard: FC<{
  imgPath: string;
  authorName: string;
  authorPostCount: number;
}> = ({ imgPath, authorName, authorPostCount }) => {
  return (
    <div style={outerStyle}>
      <ul style={innerStyle}>
        <Author
          imgPath={imgPath}
          authorName={authorName}
          authorPostCount={authorPostCount}
        />
        <Author
          imgPath={imgPath}
          authorName={authorName}
          authorPostCount={authorPostCount}
        />
        <Author
          imgPath={imgPath}
          authorName={authorName}
          authorPostCount={authorPostCount}
        />
        <Author
          imgPath={imgPath}
          authorName={authorName}
          authorPostCount={authorPostCount}
        />
      </ul>
    </div>
  );
};

export default AuthorCard;
