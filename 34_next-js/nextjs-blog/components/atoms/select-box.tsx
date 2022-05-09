import React, { FC } from 'react';

const style: React.CSSProperties = {
  width: '100%',
  borderColor: 'rgba(209, 213, 219)',
  borderRadius: '0.375rem',
};

const PageTitle: FC = () => {
  return (
    <div>
      <select style={style}>
        <option>Latest</option>
        <option>Last Week</option>
      </select>
    </div>
  );
};

export default PageTitle;
