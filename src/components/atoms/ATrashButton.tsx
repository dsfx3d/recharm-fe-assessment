import {ComponentProps} from "react";
import {HiTrash} from "react-icons/hi";
import {cn} from "@/lib/cn";

type TProps = ComponentProps<"div"> & {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function ATrashButton({disabled, onClick, ...props}: TProps) {
  return (
    <div
      {...props}
      onClick={event => {
        if (!disabled) {
          onClick?.(event);
        }
      }}
    >
      <HiTrash
        className={cn(
          "h-4 w-4 cursor-pointer",
          disabled && "opacity-30 cursor-text",
          "text-inherit",
        )}
      />
    </div>
  );
}
