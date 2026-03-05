import type { Meta, StoryObj } from '@storybook/react';
// Koristimo relativnu putanju koja izlazi iz 'stories' i ulazi u 'components' folder
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Standardno stanje
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'ivan.ackar@example.ch',
    type: 'email',
  },
};

// Stanje s greškom (ključno za prikaz logike sustava)
export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: '123',
    error: 'Password must be at least 8 characters long.',
  },
};

// Onemogućeno stanje
export const Disabled: Story = {
  args: {
    label: 'Username',
    disabled: true,
    placeholder: 'ivan_fer_98',
    helperText: 'You cannot change your username at this time.',
  },
};

// Polje s pomoćnim tekstom
export const WithHelperText: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+41 XX XXX XX XX',
    helperText: 'Include your country code for Swiss numbers.',
  },
};