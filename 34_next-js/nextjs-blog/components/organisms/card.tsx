import React, { FC } from 'react';
import CardHeader from './card-header';
import CardBody from './card-body';
import CardFooter from './card-footer';

const outerStyle: React.CSSProperties = {
  marginTop: '1.5rem',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '56rem',
  paddingLeft: '2.5rem',
  paddingRight: '2.5rem',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
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
    <div style={outerStyle}>
      <div style={innerStyle}>
        <CardHeader timestamp={timestamp} message={message} />
        <CardBody titleText={titleText} contentText={contentText} />
        <CardFooter text={text} imgPath={imgPath} userName={userName} />
      </div>
    </div>
  );
};

export default Card;
