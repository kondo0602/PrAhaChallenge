import React, { FC } from 'react';
import UserIcon from '../atoms/user-icon';
import UserName from '../atoms/user-name';

const style: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const User: FC<{ imgPath: string; userName: string }> = ({
  imgPath,
  userName,
}) => {
  return (
    <div>
      <a href="#" style={style}>
        <UserIcon imgPath={imgPath} />
        <UserName userName={userName} />
      </a>
    </div>
  );
};

export default User;
