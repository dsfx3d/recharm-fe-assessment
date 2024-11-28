import {fn} from "@storybook/test";
import ATrashButton from "./ATrashButton";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Atoms/Trash Button",
  component: ATrashButton,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ATrashButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
