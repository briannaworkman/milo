'use client';

import { SelectProps } from '@radix-ui/react-select';
import { SelectOption } from '../../types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';

type ComposedSelectProps = {
  placeholder: string;
  groups?: { label: string; options: SelectOption[] }[];
  options?: SelectOption[];
} & SelectProps;

const ComposedSelect = ({
  placeholder,
  groups,
  options,
  ...props
}: ComposedSelectProps) => {
  return (
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {groups
          ? groups.map((group) => (
              <SelectGroup key={group.label}>
                <SelectLabel>{group.label}</SelectLabel>
                {group.options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.isDisabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
                <SelectSeparator />
              </SelectGroup>
            ))
          : options?.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.isDisabled}
              >
                {option.label}
              </SelectItem>
            ))}
      </SelectContent>
    </Select>
  );
};

export default ComposedSelect;
