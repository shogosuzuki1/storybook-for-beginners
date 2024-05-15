import { Meta, StoryObj } from "@storybook/react";

import Component from "./night-shift";

const meta = {
  title: "lesson2/aggregate/night-shift",
  component: Component,
  args: {
    aggregationPeriod: {
      data: {
        startDate: new Date(2024, 3, 1),
        endDate: new Date(2024, 3, 30),
      },
    },
    nightShift: {
      data: [
        {
          id: 1,
          name: "name01",
          days: 5,
        },
        {
          id: 2,
          name: "name02",
          days: 4,
        },
        {
          id: 3,
          name: "name03",
          days: 3,
        },
        {
          id: 4,
          name: "name04",
          days: 2,
        },
        {
          id: 5,
          name: "name05",
          days: 1,
        },
      ],
    },
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

export const NightShift: StoryObj<typeof meta> = {};
