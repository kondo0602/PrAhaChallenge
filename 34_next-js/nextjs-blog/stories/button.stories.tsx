import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const onClick = () => console.log('clicked.');

export const BlueMidiumButton = Template.bind({});
BlueMidiumButton.args = {
  children: '応募する',
  color: 'blue',
  size: 'medium',
  disabled: false,
  onClick: onClick,
};

export const RedSmallButton = Template.bind({});
RedSmallButton.args = {
  children: '削除する',
  color: 'red',
  size: 'small',
  disabled: false,
  onClick: onClick,
};

export const RedSmallDisabledButton = Template.bind({});
RedSmallDisabledButton.args = {
  children: '削除する',
  color: 'red',
  size: 'small',
  disabled: true,
  onClick: onClick,
};
