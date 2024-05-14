import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Login from "./login";

const meta = {
  title: "lesson2/auth/Login",
  component: Login,
  args: {
    onSubmit: fn(),
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Login>;
export default meta;

export const Main: StoryObj<typeof meta> = {};
