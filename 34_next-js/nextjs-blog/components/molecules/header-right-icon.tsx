import React, { FC } from 'react';
import { css } from '@emotion/react';

const styles = {
  button: css`
    display: block;
    outline: none;
    @media (min-width: 768px) {
      display: none;
    }
  `,
  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
    fill: currentColor;
  `,
};

const HeaderRight: FC<{}> = ({}) => {
  return (
    <div>
      <button css={styles.button}>
        <svg viewBox="0 0 24 24" css={styles.icon}>
          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default HeaderRight;
