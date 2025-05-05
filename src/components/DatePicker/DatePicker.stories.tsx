import { Meta, StoryObj } from '@storybook/react';
import InputDatePicker from './InputDatePicker';

const meta: Meta<typeof InputDatePicker> = {
  component: InputDatePicker,
  title: 'Components/DatePicker',
};

type Story = StoryObj<typeof InputDatePicker>;

export const Default: Story = {
  args: {
    inputProps: {
      placeholder: 'Select a date',
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: new Date('10-01-2023'),
  },
};

export default meta;
