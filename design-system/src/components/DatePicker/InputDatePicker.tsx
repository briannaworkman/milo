import React from 'react';
import { Input, InputProps } from '../Input/Input';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover/Popover';
import Button from '../Button/Button';
import { CalendarIcon } from 'lucide-react';
import { Calendar, CalendarProps } from '../Calendar/Calendar';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';

type InputDatePickerProps = {
  defaultValue?: Date;
  inputProps: InputProps & React.RefAttributes<HTMLInputElement>;
  calendarProps: CalendarProps;
};

const InputDatePicker = ({
  defaultValue,
  inputProps,
  calendarProps,
}: InputDatePickerProps) => {
  const [stringDate, setStringDate] = React.useState<string>(
    defaultValue ? format(defaultValue, 'MM/dd/yyyy') : ''
  );
  const [date, setDate] = React.useState<Date | undefined>(
    defaultValue ? defaultValue : undefined
  );
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  return (
    <Popover>
      <div className="relative">
        <Input
          type="string"
          value={stringDate}
          onChange={(e) => {
            setStringDate(e.target.value);
            const parsedDate = new Date(e.target.value);
            if (parsedDate.toString() === 'Invalid Date') {
              setErrorMessage('Invalid Date');
              setDate(undefined);
            } else {
              setErrorMessage('');
              setDate(parsedDate);
            }
          }}
          {...inputProps}
        />
        {errorMessage !== '' && (
          <div className="absolute bottom-[-1.75rem] left-0 text-red-400 text-sm">
            {errorMessage}
          </div>
        )}
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'font-normal absolute right-0 translate-y-[-50%] top-[50%] rounded-l-none',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="w-4 h-4 text-base-content" />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0">
        <Calendar
          {...calendarProps}
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (!selectedDate) return;
            setDate(selectedDate);
            setStringDate(format(selectedDate, 'MM/dd/yyyy'));
            setErrorMessage('');
          }}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
  );
};

export default InputDatePicker;
