import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";


const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "",
  },
  argTypes: {
    placeholder: {control: "text"},
    type: {control: "text"}
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args:{variant:'default', placeholder:'Input Default'}
}

export const Outlined: Story = {
  args:{variant:'outlined', placeholder:'Input Outlined'}
}

export const Disabled: Story = {
  args: {variant: "disabled", disabled:true}
}
