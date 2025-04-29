import Button from '../Button/Button';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

type ComposedPopoverProps = {
  trigger: {
    variant: 'link' | 'primary' | 'secondary' | 'outline' | 'ghost';
    text: string;
  };
  children: React.ReactNode;
};

const ComposedPopover = ({ trigger, children }: ComposedPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={trigger.variant}>{trigger.text}</Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};

export default ComposedPopover;
