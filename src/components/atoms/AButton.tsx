import {Button} from "flowbite-react";
import {HiPlus} from "react-icons/hi";
import {cva} from "class-variance-authority";
import React, {ComponentProps, useMemo} from "react";

type Variant = "primary" | "light";
type TProps = ComponentProps<typeof Button> & {
  variant: Variant;
};
export default function AButton({children, variant, ...props}: TProps) {
  const variants = useMemo<Record<string, string>>(
    () => ({variant}),
    [variant],
  );
  return (
    <Button color={variant} className={toButton(variants)} {...props}>
      <span className="inline-flex justify-start items-center gap-[0.549rem] text-sm font-medium leading-[21px]">
        <HiPlus className={toIcon(variants)} />
        {children}
      </span>
    </Button>
  );
}

const iconVariant: Record<Variant, string> = {
  primary: "",
  light: "text-white bg-purple-800 rounded-full",
};
const toIcon = cva([], {variants: {variant: iconVariant}});

const buttonVariant: Record<Variant, string> = {
  primary: "text-white font-medium bg-purple-700 hover:bg-purple-800",
  light: "bg-white hover:bg-gray-50 hover:text-purple-800 border-gray-300",
};
const buttonBase = "border border-gray-300 box-border px-[3px] py-0.25";
const toButton = cva([buttonBase], {variants: {variant: buttonVariant}});
