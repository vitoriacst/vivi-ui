import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
title:'Components/Tooltip',
component: Tooltip,
tags:["autodocs"],
args: {
  children:"Tooltip"
},
argTypes: {
  children: {control: "text"}
}
}

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {variant:"default", children:"Default Tooltip", backgroundColor:'#004aad'}
}
