import { Meta, StoryObj } from "@storybook/react";

import Component from "./default-assign";

const meta = {
  title: "lesson2/default-assign",
  component: Component,
  args: {
    data: [
      {
        id: 1,
        name: "日曜",
        isHoliday: true,
      },
      {
        id: 2,
        name: "月曜",
        isHoliday: false,
      },
      {
        id: 3,
        name: "火曜",
        isHoliday: false,
      },
      {
        id: 4,
        name: "水曜",
        isHoliday: false,
      },
      {
        id: 5,
        name: "木曜",
        isHoliday: false,
      },
      {
        id: 6,
        name: "金曜",
        isHoliday: false,
      },
      {
        id: 7,
        name: "土曜",
        isHoliday: true,
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const DefaultAssign: StoryObj<typeof meta> = {};
