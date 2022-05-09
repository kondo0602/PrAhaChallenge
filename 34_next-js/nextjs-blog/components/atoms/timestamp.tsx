import React, { FC } from 'react';

const style: React.CSSProperties = {
  fontWeight: '300',
  color: 'rgba(75, 85, 99, 1)',
};

const Timestamp: FC<{ timestamp: string }> = ({ timestamp }) => {
  return <span style={style}>{timestamp}</span>;
};

export default Timestamp;
