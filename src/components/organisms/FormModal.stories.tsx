import {fn} from "@storybook/test";
import FormModal from "./FormModal";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Organisms/Form Modal",
  component: FormModal,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    className: "border",
    onSubmit: e => {
      e.preventDefault();
      console.log("here");

      fn()(e);
    },
  },
} satisfies Meta<typeof FormModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex w-full flex-grow justify-center items-center">
        <img src="https://i.redd.it/tgvx1qs66d3e1.png" alt="meme" />
      </div>
    ),
  },
};
