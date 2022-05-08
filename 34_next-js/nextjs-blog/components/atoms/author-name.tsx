import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  container: css`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-weight: 700;
    color: rgba(55, 65, 81, 1);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
};

const AuthorName: FC<{ authorName }> = ({ authorName }) => {
  return (
    <a href="#" css={styles.container}>
      {authorName}
    </a>
  );
};

export default AuthorName;
