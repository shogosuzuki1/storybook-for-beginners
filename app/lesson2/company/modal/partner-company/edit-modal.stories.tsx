import { Meta, StoryObj } from "@storybook/react";

import Component from "./edit-modal";

const meta = {
  title: "lesson2/company/modal/partner-company",
  component: Component,
  args: {
    id: 1,
    charIcon: "い",
    name: "company01",
    phoneNumber: "000-0000-000",
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
