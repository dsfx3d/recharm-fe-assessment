import {HiX} from "react-icons/hi";
import {toSolution} from "@/lib/toSolution";
import {useAutoScroll} from "@/hooks/useAutoScroll";
import {useUrlArrayForm} from "@/hooks/useUrlArrayForm";
import AButton from "./atoms/AButton";
import ATrashButton from "./atoms/ATrashButton";
import React, {ComponentProps, useCallback, useRef} from "react";
import UrlField from "./organism/UrlField";

type TProps = Partial<Parameters<typeof useUrlArrayForm>[0]>;

export function CreateRequestMainComponent({
  initialUrls = [""],
  maxUrls = 10,
}: TProps) {
  const $scrollContainer = useRef<HTMLDivElement>(null);
  useAutoScroll($scrollContainer.current);

  const {fields, register, handleSubmit, toError, append, remove} =
    useUrlArrayForm({
      initialUrls,
      maxUrls,
    });

  return (
    <form
      onSubmit={handleSubmit(payload => alert(toSolution(payload)))}
      className="flex flex-col h-full bg-white rounded-t-lg"
    >
      <FormHead />
      <div
        ref={$scrollContainer}
        className="flex-grow flex w-full overflow-y-auto"
      >
        <div className="max-w-168 w-full box-content mx-auto space-y-6 p-6 py-8">
          <FormHero />
          {fields.map((_, index, {length}) => (
            <UrlField
              key={index}
              {...register(index)}
              animated={index > 0}
              error={toError(index)}
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
            </UrlField>
          ))}
          <div className="flex w-full items-center justify-between">
            <AButton variant="light" onClick={append}>
              Add URL
            </AButton>
            <small className="px-1">
              {fields.length}/{maxUrls}
            </small>
          </div>
          <div className="min-h-8">&nbsp;</div>
        </div>
      </div>
      <FormFooter />
    </form>
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

const FormHero = React.memo(function FormHero() {
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
});

const FormHead = React.memo(function FormHead() {
  return (
    <div className="flex items-center justify-between p-6 pr-4 border-b rounded-t">
      <h3 className="text-lg leading-[27px] font-semibold">
        Create New Request
      </h3>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-0 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <HiX className="w-5 h-5" />
      </button>
    </div>
  );
});

const FormFooter = React.memo(function FormFooter() {
  return (
    <div className="sticky bottom-0 flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
      <AButton type="submit" variant="primary">
        Create Request
      </AButton>
    </div>
  );
});
