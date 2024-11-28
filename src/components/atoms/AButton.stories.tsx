import {fn} from "@storybook/test";
import AButton from "./AButton";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Atoms/AButton",
  component: AButton,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof AButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Create Request",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "Add URL",
  },
};
