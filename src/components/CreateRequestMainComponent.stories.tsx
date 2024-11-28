/* eslint-disable sonarjs/no-duplicate-string */
import {CreateRequestMainComponent} from "./CreateRequestMainComponent";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Features/Create New Request",
  component: CreateRequestMainComponent,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "figma",
    },
  },
} satisfies Meta<typeof CreateRequestMainComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StartingState: Story = {};
export const FirstUrl: Story = {
  args: {
    initialUrls: ["https://drive.google.com/some-link"],
  },
};
export const MultipleUrls: Story = {
  args: {
    initialUrls: [
      "http://drive.google.com/some-link",
      "http://drive.google.com/some-link",
    ],
  },
};
export const InvalidUrl: Story = {
  args: {
    initialUrls: ["ive.google"],
  },
};
