import { Meta, StoryObj } from "@storybook/react";

import Component from "./add-modal";

const meta = {
  title: "lesson2/company/modal/employee",
  component: Component,
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

export const AddModal: StoryObj<typeof meta> = {};
