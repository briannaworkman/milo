import { Meta, StoryObj } from '@storybook/react';
import ComposedPopover from './ComposedPopover';

const meta: Meta<typeof ComposedPopover> = {
  component: ComposedPopover,
  title: 'Components/Popover',
};

type Story = StoryObj<typeof ComposedPopover>;

export const Primary: Story = {
  args: {
    trigger: {
      variant: 'primary',
      text: 'Trigger',
    },
    children: (
      <div className="text-base-content">
        <p>Popover content</p>
      </div>
    ),
  },
};

export default meta;
