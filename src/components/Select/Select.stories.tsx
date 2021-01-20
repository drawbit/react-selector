import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { mockKeywords } from './mock';
import Select, { Props } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChangeValues: { action: 'onChangeValues' },
    onChangeInput: { action: 'onChangeInput' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  values: ['test1', 'test2', 'test3', 'test4'],
  keywords: mockKeywords,
};
