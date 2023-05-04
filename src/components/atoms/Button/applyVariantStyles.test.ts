import { applyVariantStyles } from "@/components/atoms/Button/applyVariantStyles";

describe("applyVariantStyles", () => {
  it("should return an array of styles matching each variant selected", () => {
    const variantConfig = applyVariantStyles({
      variants: { size: { small: "sx" }, variant: { primary: "red" } },
      compoundVariants: [],
    });
    const styles = variantConfig({ size: "small", variant: "primary" });

    expect(styles).toEqual(["sx", "red"]);
  });
  it("should add any compound variants if the correct combination is applied", () => {
    const variantConfig = applyVariantStyles({
      variants: { size: { small: "sx" }, variant: { primary: "red" } },
      compoundVariants: [
        { size: "small", variant: "primary", styles: "uppercase" },
      ],
    });
    const styles = variantConfig({ size: "small", variant: "primary" });

    expect(styles).toEqual(["sx", "red", "uppercase"]);
  });
  it("should not add any compound variants if it is not a full match", () => {
    const variantConfig = applyVariantStyles({
      variants: { size: { small: "sx" }, variant: { primary: "red" } },
      compoundVariants: [
        { size: "small", variant: "secondary", styles: "uppercase" },
      ],
    });
    const styles = variantConfig({ size: "small", variant: "primary" });

    expect(styles).toEqual(["sx", "red"]);
  });
});
