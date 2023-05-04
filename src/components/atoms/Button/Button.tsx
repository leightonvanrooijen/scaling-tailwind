import React from "react";
import tw, { TwStyle } from "twin.macro";
import { applyVariantStyles } from "@/components/atoms/Button/applyVariantStyles";
import { FlattenSimpleInterpolation } from "styled-components";

export type StyleOptions =
  | (TwStyle | FlattenSimpleInterpolation)[]
  | FlattenSimpleInterpolation
  | TwStyle;

const buttonVariants = applyVariantStyles({
  variants: {
    variant: {
      primary: tw`bg-green-500 hover:bg-green-600 active:bg-green-400 shadow shadow-green-900`,
      secondary: tw`bg-gray-200 hover:bg-gray-300 active:bg-gray-100`,
      outlined: tw`bg-transparent hover:bg-gray-300 active:bg-gray-100 border-2`,
    },
    size: {
      small: tw`py-1 px-2`,
      medium: tw`py-2 px-2.5`,
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "small",
      styles: tw`uppercase`,
    },
  ],
});

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
  overrides?: any;
  styles?: StyleOptions;
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium";
};

export const Icon = ({
  styles,
  overrides,
}: {
  overrides?: any;
  styles?: StyleOptions;
}) => {
  return (
    <div
      css={[tw`h-5 w-5 bg-blue-500 rounded`, styles, overrides?.style]}
    ></div>
  );
};

export const Button = ({
  variant = "primary",
  size = "medium",
  overrides,
  styles,
  onClick,
}: ButtonProps) => {
  return (
    <button
      css={[
        tw`rounded text-base flex`,
        buttonVariants({ size, variant }),
        styles,
        overrides?.style,
      ]}
      onClick={onClick}
    >
      <Icon overrides={overrides?.LeftIcon} styles={tw`mr-2`} />
      <p>Button</p>
      <Icon overrides={overrides?.RightIcon} styles={tw`ml-2`} />
    </button>
  );
};

/*
The ability to:
  use Tailwind within an override system - typically this cannot be done due to css precedence
  style system accepts plain css and tailwind css - albeit we have to use the helpers
  compiles tailwind to component based classes which creates a smaller bundle in larger projects
 */
