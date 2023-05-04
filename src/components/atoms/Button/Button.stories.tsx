import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atoms/Button/Button";
import tw, { css } from "twin.macro";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const WithOverridesApplied: Story = {
  args: {
    variant: "primary",
    overrides: {
      style: css`
        // apply tailwind within css
        ${tw`bg-orange-500`};
        height: 4rem;
      `,
      LeftIcon: {
        style: [
          // can separate out tailwind from css
          tw`bg-red-500`,
          css`
            height: 2rem;
          `,
        ],
      },
    },
  },
};
