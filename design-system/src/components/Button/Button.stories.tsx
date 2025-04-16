import { Loader2, Telescope } from 'lucide-react';
import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'link',
  },
};

export const Icon: Story = {
  args: {
    children: <Telescope />,
    size: 'icon',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Telescope /> Explore!
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="animate-spin" /> Loading...
      </>
    ),
    disabled: true,
  },
};

export default meta;
