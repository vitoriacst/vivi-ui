import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    checked: false,
    onChange: () => { }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { checked: false, onChange: () => { } }
}

export const Checked: Story = {
  args: { checked: true, onChange: () => { } }
}

export const Disabled: Story = {
  args: { checked: false, onChange: () => { }, disabled: true }
}
