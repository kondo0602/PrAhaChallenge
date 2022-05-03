import React, { FC } from "react";
import Timestamp from "../atoms/timestamp"
import Button from "../atoms/button"

const style: React.CSSProperties = {
  display: 'flex',
  placeItems: 'center',
  justifyContent: 'space-between'
}

const CardHeader: FC<{ timestamp: string, message: string }> = ({timestamp, message}) => {
  return (
  <div style={style}>
      <Timestamp timestamp={timestamp} />
      <Button message={message} />
  </div>
  )
};

export default CardHeader;
