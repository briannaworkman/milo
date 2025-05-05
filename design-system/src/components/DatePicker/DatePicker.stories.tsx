import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const DatePickerComponent = () => {
  const [selected, setSelected] = useState<Date>(new Date('2025-04-02'));

  return (
    <DatePicker
      calendarProps={{
        mode: 'single',
        required: true,
        selected,
        onSelect: setSelected,
      }}
    />
  );
};

const meta: Meta<typeof DatePicker> = {
  component: DatePickerComponent,
  title: 'Components/DatePicker',
};

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {};

export default meta;
