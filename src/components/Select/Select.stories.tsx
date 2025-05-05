import { Meta, StoryObj } from '@storybook/react';
import ComposedSelect from './ComposedSelect';

const meta: Meta<typeof ComposedSelect> = {
  component: ComposedSelect,
  title: 'Components/Select',
};

type Story = StoryObj<typeof ComposedSelect>;

export const WithOptions: Story = {
  args: {
    placeholder: 'Select',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'blueberry', label: 'Blueberry' },
      { value: 'grapes', label: 'Grapes' },
      { value: 'pineapple', label: 'Pineapple' },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    placeholder: 'Select',
    groups: [
      {
        label: 'Fruits',
        options: [
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ],
      },
      {
        label: 'Vegetables',
        options: [
          { value: 'carrot', label: 'Carrot' },
          { value: 'broccoli', label: 'Broccoli', isDisabled: true },
          { value: 'spinach', label: 'Spinach' },
        ],
      },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: 'Select',
    defaultValue: 'banana',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Select',
    disabled: true,
  },
};

export default meta;
