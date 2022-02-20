import React from 'react';
import Game from './Game';

export default {
  component: Game,
  title: 'Game',
};

const Template = args => <Game {...args} />;

export const Default = Template.bind({});
Default.args = { };
