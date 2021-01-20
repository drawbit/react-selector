import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SelectItem, { Props } from './SelectItem';

export default {
  title: 'Components/SelectItem',
  component: SelectItem,
  argTypes: { onRemove: { action: 'remove' } },
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ display: 'flex' }}>
    <SelectItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  value: 'select item',
};
