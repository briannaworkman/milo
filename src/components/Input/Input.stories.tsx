import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Check, Eye } from 'lucide-react';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Default Input',
  },
};

export const WithStartContent: Story = {
  args: {
    placeholder: 'With Start Content',
    startContent: <Check className="text-success-main" />,
  },
};

export const WithEndContent: Story = {
  args: {
    placeholder: 'With End Content',
    endContent: <Eye className="text-error-main" />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    disabled: true,
  },
};

export default meta;
