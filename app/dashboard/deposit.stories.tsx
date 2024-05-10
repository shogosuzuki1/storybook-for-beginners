import { Meta, StoryObj } from "@storybook/react";

import Component from "./deposit";

const meta = {
  title: "dashboard/Deposit",
  component: Component,
  args: {
    data: {
      amount: Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
    },
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Deposit: StoryObj<typeof meta> = {};
