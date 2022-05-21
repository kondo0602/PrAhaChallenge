import { css } from '@emotion/react';

const Button = (props) => {
  let backgroundColor;
  if (props.disabled) {
    backgroundColor = 'gray';
  } else if (props.color) {
    backgroundColor = props.color;
  } else {
    backgroundColor = 'black';
  }

  let width, height;
  if (props.size === 'small') {
    width = 100;
    height = 40;
  } else if (props.size === 'medium') {
    width = 150;
    height = 60;
  } else if (props.size === 'large') {
    width = 200;
    height = 80;
  } else {
    width = 150;
    height = 60;
  }

  const disabled = props.disabled;

  const styles = {
    container: css`
      font-weight: 700;
      color: rgba(243, 244, 246, 1);
      background-color: ${backgroundColor};
      width: ${width}px;
      height: ${height}px;
      border-radius: 0.25em;
    `,
  };

  return (
    <button css={styles.container} disabled={disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
