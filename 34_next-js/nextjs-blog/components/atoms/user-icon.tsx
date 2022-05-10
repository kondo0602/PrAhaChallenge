import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  userIcon: css`
    display: none;
    object-fit: cover;
    width: 2.5rem;
    height: 2.5rem;
    margin: 1rem;
    border-radius: 9999px;
    @media (min-width: 640px) {
      display: block;
    }
  `,
};

const UserIcon: FC<{ imgPath: string }> = ({ imgPath }) => {
  return <img src="/images/sample1.png" alt="avatar" css={styles.userIcon} />;
};

export default UserIcon;
