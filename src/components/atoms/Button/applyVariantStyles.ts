import tw from "twin.macro";

type VariantTypes<T> = {
  [P in keyof T]: keyof T[P];
};

// TODO type
export const getCompoundVariantStyles = (
  compoundVariants: Record<string, any>[],
  variantsApplied: Record<string, any>
) => {
  const keyValues = Object.entries(variantsApplied);
  const compoundStyles = compoundVariants.find((compoundVariant) => {
    return keyValues.every(([key, value]) => {
      return compoundVariant[key] === value;
    });
  });
  return compoundStyles?.styles;
};
export const applyVariantStyles = <
  T extends {
    variants: Record<string, any>;
    compoundVariants: Record<string, any>[];
  }
>(
  config: T
) => {
  return (props: VariantTypes<T["variants"]>) => {
    const variantStyles: string[] = Object.entries(props).map(
      ([key, value]) => {
        return config.variants[key][value];
      }
    );
    const comboStyles: string = getCompoundVariantStyles(
      config.compoundVariants,
      props
    );
    return [...variantStyles, comboStyles];
  };
};
