'use client';

import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover/Popover';
import Button from '../Button/Button';
import { Calendar, CalendarProps } from '../Calendar/Calendar';

type DatePickerProps = {
  calendarProps: CalendarProps;
  className?: string;
};

const DatePicker = ({ calendarProps, className }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className={className}>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar {...calendarProps} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
