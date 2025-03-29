import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  argTypes: {
    children: {control: "text"}
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { variant: "default" , children:'Primary Button', backgroundColor:'#004aad'},
};

export const Outilined: Story = {
  args: { variant: "outlined", children:'Outlined Button' },
};

export const Disabled: Story = {
  args: {variant: "disabled", children:'disabled', disabled:true}
}
