import { Meta, StoryObj } from "@storybook/react";

import Component from "./order";

const meta = {
  title: "dashboard/Orders",
  component: Component,
  args: {
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

export const Orders: StoryObj<typeof meta> = {};
