import React from 'react';

function Square(props) {
  return (
    <button className={'square' + ' ' + 'data-e2e-' + (props.id) } onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
