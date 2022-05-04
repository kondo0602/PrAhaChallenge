import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';
import React, { FC } from 'react';
import PaginationItem from '../atoms/pagination-item';

const outerStyle: React.CSSProperties = {
  marginTop: '2rem',
};

const innerStyle: React.CSSProperties = {
  display: 'flex',
};

const Pagination: FC<{ pageNumbers: string[] }> = ({ pageNumbers }) => {
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <PaginationItem text="previous" />
        {pageNumbers.map((p) => {
          return <PaginationItem text={p} />;
        })}
        <PaginationItem text="next" />
      </div>
    </div>
  );
};

export default Pagination;
