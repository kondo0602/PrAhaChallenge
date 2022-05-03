import React, { FC } from 'react';

const style: React.CSSProperties = {
  font: 'light',
  color: 'rgba(75, 85, 99)',
};

const Timestamp: FC<{ timestamp: string }> = ({ timestamp }) => {
  return <span style={style}>{timestamp}</span>;
};

export default Timestamp;
