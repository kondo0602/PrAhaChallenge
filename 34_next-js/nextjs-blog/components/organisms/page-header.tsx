import React, { FC } from 'react';
import PageTitle from '../atoms/page-title';
import SelectBox from '../atoms/select-box';

const style: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const PageHeader: FC<{ text: string }> = ({ text }) => {
  return (
    <div style={style}>
      <PageTitle text={text} />
      <SelectBox />
    </div>
  );
};

export default PageHeader;
