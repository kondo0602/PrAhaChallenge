import React, { FC } from 'react';
import { css } from '@emotion/react';
import HeaderItem from '../atoms/header-item';

const styles = {
  headerRight: css`
    flex-direction: column;
    display: none;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      margin-left: -1rem;
      margin-right: -1rem;
    }
  `,
};

const HeaderRight: FC<{ headerRightItems: string[] }> = ({
  headerRightItems,
}) => {
  return (
    <div css={styles.headerRight}>
      {headerRightItems.map((h) => {
        return <HeaderItem text={h} />;
      })}
    </div>
  );
};

export default HeaderRight;
