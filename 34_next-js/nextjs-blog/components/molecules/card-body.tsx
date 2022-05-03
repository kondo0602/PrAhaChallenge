import React, { FC } from "react";
import Title from "../atoms/title"
import Content from "../atoms/content"

const style: React.CSSProperties = {
  marginTop: '0.5rem'
}

const CardBody: FC<{ titleText: string, contentText: string }> = ({titleText, contentText}) => {
  return (
  <div style={style}>
      <Title text={titleText} />
      <Content text={contentText} />
  </div>
  )
};

export default CardBody;
