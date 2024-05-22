import { Meta, StoryObj } from "@storybook/react";

import Component from "./edit-modal";

const meta = {
  title: "lesson2/holiday/modal",
  component: Component,
  args: {
    id: 1,
    date: new Date("2024-01-01"),
    name: "元日",
    isNational: true,
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const EditModal: StoryObj<typeof meta> = {};
