import { Meta, StoryObj } from "@storybook/react";

import Component from "./holiday-config";

const meta = {
  title: "lesson2/holiday-config",
  component: Component,
  args: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    publicHolidays: {
      data: [
        {
          id: 1,
          date: new Date("2024-01-02"),
          name: "正月休み",
          isNational: false,
        },
        {
          id: 2,
          date: new Date("2024-08-14"),
          name: "夏季休暇１",
          isNational: false,
        },
        {
          id: 3,
          date: new Date("2024-08-15"),
          name: "夏季休暇２",
          isNational: false,
        },
        {
          id: 4,
          date: new Date("2024-08-16"),
          name: "夏季休暇３",
          isNational: false,
        },
        {
          id: 5,
          date: new Date("2024-08-17"),
          name: "夏季休暇４",
          isNational: false,
        },
      ],
    },
    nationalHolidays: {
      data: [
        {
          id: 1,
          date: new Date("2024-01-01"),
          name: "元日",
          isNational: true,
        },
        {
          id: 2,
          date: new Date("2024-01-08"),
          name: "成人の日",
          isNational: true,
        },
        {
          id: 3,
          date: new Date("2024-02-12"),
          name: "建国記念日",
          isNational: true,
        },
        {
          id: 4,
          date: new Date("2024-04-01"),
          name: "祝日１",
          isNational: true,
        },
        {
          id: 5,
          date: new Date("2024-05-02"),
          name: "祝日２",
          isNational: true,
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

export const HolidayConfig: StoryObj<typeof meta> = {};
