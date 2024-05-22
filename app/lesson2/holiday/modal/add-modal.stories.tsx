import { Meta, StoryObj } from "@storybook/react";

import Component from "./add-modal";

const meta = {
  title: "lesson2/holiday/modal",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const AddModal: StoryObj<typeof meta> = {};
