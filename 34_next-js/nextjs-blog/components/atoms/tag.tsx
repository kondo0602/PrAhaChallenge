import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  tag: css`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-weight: 700;
    color: rgba(243, 244, 246, 1);
    background-color: rgba(75, 85, 99);
    border-radius: 0.25em;
  `,
};

const Tag: FC<{ message: string }> = ({ message }) => {
  return <a css={styles.tag}>{message}</a>;
};

export default Tag;
