import React from 'react';
import Board from './Board';
import { action } from "@storybook/addon-actions";

export default {
  component: Board,
  title: 'Board',
};

const Template = args => <Board {...args} />;

export const empty_board = Template.bind({});
empty_board.args = {
  squares: Array(9).fill(null),
  onClick: action("clicked"),
};

export const has_value_board = Template.bind({});
has_value_board .args = {
  squares: Array(9).fill('△'),
  onClick: action("clicked"),
};
