import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Demo from './Demo';

export default {
  title: 'Components/SelectDemo',
  component: Demo,
} as Meta;

const Template: Story = (args) => <Demo {...args} />;

export const Default = Template.bind({});
Default.args = {};
