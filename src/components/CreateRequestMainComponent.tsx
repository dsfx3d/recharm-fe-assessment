import {useKeepScrollAtBottom} from "@/hooks/useKeepScrollAtBottom";
import {useUrlArrayForm} from "@/hooks/useUrlArrayForm";
import AButton from "./atoms/AButton";
import ATrashButton from "./atoms/ATrashButton";
import FormModal from "./organisms/FormModal";
import MTextField from "./molecules/MTextField";
import React, {ComponentProps, useCallback, useRef} from "react";

type TProps = Partial<Parameters<typeof useUrlArrayForm>[0]>;

export function CreateRequestMainComponent({
  initialUrls = [""],
  maxUrls = 10,
}: TProps) {
  const $scrollContainer = useRef<HTMLDivElement>(null);
  useKeepScrollAtBottom($scrollContainer.current);

  const {fields, register, submit, toError, append, remove} = useUrlArrayForm({
    initialUrls,
    maxUrls,
  });

  return (
    <FormModal
      onSubmit={submit}
      className="flex flex-col h-full bg-white rounded-t-lg"
    >
      <div
        ref={$scrollContainer}
        className="flex-grow flex w-full overflow-y-auto"
      >
        <div className="max-w-168 w-full box-content mx-auto space-y-6 p-6 py-8">
          <FormHead />
          {fields.map((_, index, {length}) => (
            <MTextField
              {...register(index)}
              error={toError(index)}
              key={index}
              id={`url-${index}`}
              placeholder="eg. https://drive.google.com/some-video"
              label={`Video/Folder URL ${index + 1}`}
              autoComplete="off"
            >
              <DeleteButton
                index={index}
                disabled={length === 1}
                className={
                  toError(index)?.length ? "text-inherit" : "text-[#858992]"
                }
                onClick={remove}
              />
            </MTextField>
          ))}
          <AButton variant="light" onClick={append}>
            Add URL
          </AButton>
          <div className="min-h-8">&nbsp;</div>
        </div>
      </div>
    </FormModal>
  );
}

function DeleteButton({
  index,
  onClick,
  ...props
}: Omit<ComponentProps<typeof ATrashButton>, "onClick"> & {
  index: number;
  onClick: (index: number) => void;
}) {
  const click = useCallback<React.MouseEventHandler<HTMLDivElement>>(
    event => {
      event.preventDefault();
      event.stopPropagation();
      onClick(index);
    },
    [onClick, index],
  );
  return <ATrashButton {...props} onClick={click} />;
}

function FormHead() {
  const subtitle =
    "These videos would be cut, labeled and made available in your Recharm video library";
  return (
    <div className="space-y-2">
      <h4 className="text-lg leading-4.5 font-bold">Add videos or folders</h4>
      <p className="text-xs leading-4.5 text-gray-900 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}
