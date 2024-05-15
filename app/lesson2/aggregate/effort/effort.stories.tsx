import { Meta, StoryObj } from "@storybook/react";

import Component from "./effort";

const meta = {
  title: "lesson2/aggregate/effort",
  component: Component,
  args: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    effort: {
      data: [
        {
          id: 1,
          spotName: "spot01",
          startDate: new Date(2024, 3, 21),
          endDate: new Date(2024, 4, 22),
          personMonth: 1,
          totalEffort: 2,
        },
        {
          id: 2,
          spotName: "spot02",
          startDate: new Date(2023, 4, 11),
          endDate: new Date(2024, 5, 12),
          personMonth: 3,
          totalEffort: 4,
        },
        {
          id: 3,
          spotName: "spot03",
          startDate: new Date(2022, 5, 15),
          endDate: new Date(2023, 6, 16),
          personMonth: 5,
          totalEffort: 6,
        },
        {
          id: 4,
          spotName: "spot04",
          startDate: new Date(2021, 7, 23),
          endDate: new Date(2022, 8, 22),
          personMonth: 7,
          totalEffort: 8,
        },
        {
          id: 5,
          spotName: "spot05",
          startDate: new Date(2023, 2, 21),
          endDate: new Date(2024, 10, 1),
          personMonth: 9,
          totalEffort: 10,
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

export const Effort: StoryObj<typeof meta> = {};
