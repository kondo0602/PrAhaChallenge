import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  title: css`
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 700;
    color: rgba(55, 65, 81);
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  `,
};

const PageTitle: FC<{ text: string }> = ({ text }) => {
  return <h1 css={styles.title}>{text}</h1>;
};

export default PageTitle;
