import {fn} from "@storybook/test";
import ATrashButton from "../atoms/ATrashButton";
import MTextField from "./MTextField";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Molecules/Text Field",
  component: MTextField,
  args: {
    label: "Video/Folder URL",
    placeholder: "eg. https://drive.google.com/some-value",
    onInput: fn(),
  },
} satisfies Meta<typeof MTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    value: "ive.google",
    error: "Enter a valid URL",
  },
};

export const Children: Story = {
  args: {
    id: "foo",
    value: "https://drive.google.com/some-value",
    children: <ATrashButton />,
  },
};
