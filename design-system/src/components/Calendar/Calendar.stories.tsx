import { useState } from 'react';
import { Calendar } from './Calendar';
import { Meta, StoryObj } from '@storybook/react';

const CalendarComponent = () => {
  const [selected, setSelected] = useState<Date>(new Date('2025-04-02'));

  return (
    <Calendar
      mode="single"
      required={true}
      selected={selected}
      onSelect={setSelected}
    />
  );
};

const meta: Meta<typeof Calendar> = {
  component: CalendarComponent,
  title: 'Components/Calendar',
};

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};

export default meta;
