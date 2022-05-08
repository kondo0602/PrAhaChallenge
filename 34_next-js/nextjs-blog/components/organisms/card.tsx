import React, { FC } from 'react';
import { css } from '@emotion/react';
import Timestamp from '../atoms/timestamp';
import Tag from '../atoms/tag';
import Link from '../atoms/link';
import User from '../molecules/user';

const styles = {
  outer: css`
    margin-top: 1.5rem;
  `,
  inner: css`
    max-width: 56rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  `,
  cardHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  cardBody: css`
    margin-top: 0.5rem;
  `,
  cardTitle: css`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: rgba(55, 65, 81, 1);
  `,
  cardContent: css`
    margin-top: 0.5rem;
    color: rgba(75, 85, 99, 1);
  `,
  cardFooter: css`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;
  `,
};

const Card: FC<{
  timestamp: string;
  message: string;
  titleText: string;
  contentText: string;
  text: string;
  imgPath: string;
  userName: string;
}> = ({
  timestamp,
  message,
  titleText,
  contentText,
  text,
  imgPath,
  userName,
}) => {
  return (
    <div css={styles.outer}>
      <div css={styles.inner}>
        <div css={styles.cardHeader}>
          <Timestamp timestamp={timestamp} />
          <Tag message={message} />
        </div>
        <div css={styles.cardBody}>
          <a css={styles.cardTitle}>{titleText}</a>
          <p css={styles.cardContent}>{contentText}</p>
        </div>
        <div css={styles.cardFooter}>
          <Link text={text} />
          <User imgPath={imgPath} userName={userName} />
        </div>
      </div>
    </div>
  );
};

export default Card;
