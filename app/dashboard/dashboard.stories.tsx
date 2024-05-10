import { Meta, StoryObj } from "@storybook/react";

import Component from "./dashboard";

const meta = {
  title: "dashboard/Dashboard",
  component: Component,
  args: {
    chart: {
      data: [
        { time: "00:00", amount: 0 },
        { time: "03:00", amount: 200 },
        { time: "06:00", amount: 600 },
        { time: "09:00", amount: 800 },
        { time: "12:00", amount: 1500 },
        { time: "15:00", amount: 2000 },
        { time: "18:00", amount: 2400 },
        { time: "21:00", amount: 2400 },
        { time: "24:00", amount: 2500 },
      ],
    },
    deposit: {
      data: {
        amount: Math.floor(Math.random() * 10000),
        date: new Date().toLocaleDateString(),
      },
    },
    order: {
      data: [
        {
          id: 1,
          date: new Date().toLocaleDateString(),
          amount: Math.floor(Math.random() * 1000),
          shipTo: "Tupelo, MS",
          paymentMethod: "VISA •••• 3719",
          name: "Elvis Presley",
        },
        {
          id: 2,
          date: new Date().toLocaleDateString(),
          amount: Math.floor(Math.random() * 1000),
          shipTo: "San Jose, CA",
          paymentMethod: "VISA •••• 2574",
          name: "Paul McCartney",
        },
        {
          id: 3,
          date: new Date().toLocaleDateString(),
          amount: Math.floor(Math.random() * 1000),
          shipTo: "Edinburgh, UK",
          paymentMethod: "VISA •••• 7465",
          name: "Tom Scholz",
        },
        {
          id: 4,
          date: new Date().toLocaleDateString(),
          amount: Math.floor(Math.random() * 1000),
          shipTo: "London, UK",
          paymentMethod: "VISA •••• 4256",
          name: "Michael Jackson",
        },
        {
          id: 5,
          date: new Date().toLocaleDateString(),
          amount: Math.floor(Math.random() * 1000),
          shipTo: "Johannesburg, SA",
          paymentMethod: "VISA •••• 3245",
          name: "Bruce Springsteen",
        },
      ],
    },
  },
  parameters: {
    layout: "centered",
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

export const Dashboard: StoryObj<typeof meta> = {};
