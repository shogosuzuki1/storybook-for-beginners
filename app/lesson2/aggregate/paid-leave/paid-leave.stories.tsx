import { Meta, StoryObj } from "@storybook/react";

import Component from "./paid-leave";

const meta = {
  title: "lesson2/aggregate/paid-leave",
  component: Component,
  args: {
    data: [
      {
        id: 1,
        employeeName: "name01",
        aggregationStartDate: new Date(2024, 3, 21),
        aggregationEndDate: new Date(2024, 4, 22),
        numberOfPaidLeave: 1,
      },
      {
        id: 2,
        employeeName: "name02",
        aggregationStartDate: new Date(2023, 4, 11),
        aggregationEndDate: new Date(2024, 5, 12),
        numberOfPaidLeave: 3,
      },
      {
        id: 3,
        employeeName: "name03",
        aggregationStartDate: new Date(2022, 5, 15),
        aggregationEndDate: new Date(2023, 6, 16),
        numberOfPaidLeave: 5,
      },
      {
        id: 4,
        employeeName: "name04",
        aggregationStartDate: new Date(2021, 7, 23),
        aggregationEndDate: new Date(2022, 8, 22),
        numberOfPaidLeave: 7,
      },
      {
        id: 5,
        employeeName: "name05",
        aggregationStartDate: new Date(2023, 2, 21),
        aggregationEndDate: new Date(2024, 10, 1),
        numberOfPaidLeave: 9,
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

export const PaidLeave: StoryObj<typeof meta> = {};
