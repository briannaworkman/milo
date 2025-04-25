import { Calendar } from './Calendar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Components/Calendar',
};

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {},
};

export default meta;
