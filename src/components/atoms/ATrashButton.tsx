import {ComponentProps, useCallback} from "react";
import {HiTrash} from "react-icons/hi";
import {cn} from "@/lib/cn";

type TProps = ComponentProps<"div"> & {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function ATrashButton({
  className,
  disabled,
  onClick,
  ...props
}: TProps) {
  const handleClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(
    event => !disabled && onClick?.(event),
    [onClick, disabled],
  );
  return (
    <div {...props} className={className} onClick={handleClick}>
      <HiTrash
        className={cn(
          "h-4 w-4 cursor-pointer",
          disabled && "opacity-30 cursor-text",
        )}
      />
    </div>
  );
}
