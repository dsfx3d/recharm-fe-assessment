import {ComponentProps, useCallback} from "react";
import {HiTrash} from "react-icons/hi";
import {cn} from "@/lib/cn";

type TProps = ComponentProps<"div"> & {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function ATrashButton({disabled, onClick, ...props}: TProps) {
  const handleClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(
    event => {
      if (!disabled) {
        onClick?.(event);
      }
    },
    [onClick, disabled],
  );
  return (
    <div {...props} onClick={handleClick}>
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
