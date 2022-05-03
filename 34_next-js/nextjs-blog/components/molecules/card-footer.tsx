import React, { FC } from 'react';
import Link from '../atoms/link';
import User from '../molecules/user';

const style: React.CSSProperties = {
  display: 'flex',
  marginTop: '1rem',
  justifyContent: 'space-between',
  placeItems: 'center',
};

const CardBody: FC<{ text: string; imgPath: string; userName: string }> = ({
  text,
  imgPath,
  userName,
}) => {
  return (
    <div style={style}>
      <Link text={text} />
      <User imgPath={imgPath} userName={userName} />
    </div>
  );
};

export default CardBody;
