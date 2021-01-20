import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { Props } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: { onClick: { action: 'click' } },
} as Meta;

const Template: Story<Props> = (args) => (
  <div>
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  options: ['test1', 'test2', 'test3', 'test4'],
};
