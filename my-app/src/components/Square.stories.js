import React from 'react';
import Square from './Square';
import { action } from "@storybook/addon-actions";

export default {
  component: Square,
  title: 'Square',
};

const Template = args => <Square {...args} />;

export const empty_square = Template.bind({});
empty_square.args = {
  onClick: action("clicked"),
  value: '',
};

export const has_value_square = Template.bind({});
has_value_square.args = {
  onClick: action("clicked"),
  value: '△'
};
