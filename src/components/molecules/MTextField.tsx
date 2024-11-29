import {Label} from "flowbite-react";
import {cn} from "@/lib/cn";
import {cva} from "class-variance-authority";
import React, {ComponentProps} from "react";

type TVariant = "default" | "failure";

type TProps = ComponentProps<"input"> & {
  children?: React.ReactNode;
  error?: string;
  label?: string;
};

export default React.forwardRef(function MTextField(
  {id, children, className, error, label, ...props}: TProps,
  forwardedRef: React.Ref<HTMLInputElement>,
) {
  const variants: Record<string, TVariant> = {
    variant: error ? "failure" : "default",
  };
  return (
    <div className={className}>
      <div className="h-[71px] flex flex-col gap-2 mb-2">
        <Label
          htmlFor={id}
          value={label}
          color={variants.variant}
          className="text-sm font-medium leading-[21px]"
        />
        <label htmlFor={id} className={cn(toInputContainer(variants), "group")}>
          <input
            ref={forwardedRef}
            id={id}
            className={toInput(variants)}
            {...props}
          />
          <span className="opacity-0 group-focus-within:opacity-100 group-hover:opacity-100">
            {children}
          </span>
        </label>
      </div>
      <div className="text-sm leading-tight text-red-600">{error}</div>
    </div>
  );
});

const containerVariant: Record<TVariant, string[]> = {
  default: [
    "border-gray-300 bg-gray-50 text-gray-900 cursor-text",
    "focus-within:border-cyan-500 focus-within:ring-cyan-500",
  ],
  failure: [
    "border-red-500 bg-red-50 text-red-700",
    "focus-within:border-red-500 focus-within:ring-red-500",
  ],
};

const inputVariant: Record<TVariant, string[]> = {
  default: ["placeholder:text-gray-500"],
  failure: ["placeholder:text-red-500 text-red-700"],
};

const toInputContainer = cva(
  [
    "w-full h-10.5 flex gap-2.5 items-center",
    "border rounded-lg box-border",
    "px-4 py-3",
    "cursor-text",
    "focus-within:ring-1",
  ],
  {
    variants: {
      variant: containerVariant,
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const toInput = cva(
  [
    "grow bg-transparent focus-visible:outline-none",
    "text-sm leading-tight font-normal",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: inputVariant,
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
