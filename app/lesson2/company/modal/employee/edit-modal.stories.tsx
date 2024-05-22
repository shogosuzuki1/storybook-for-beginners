import { Meta, StoryObj } from "@storybook/react";

import Component from "./edit-modal";

const meta = {
  title: "lesson2/company/modal/employee",
  component: Component,
  args: {
    id: 1,
    charIconId: 2,
    charIcon: "あ",
    name: "name01",
    email: "test1@example.com",
    password: "test",
    startDate: "2022/02/02",
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
