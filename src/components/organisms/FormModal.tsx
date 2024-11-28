import {HiX} from "react-icons/hi";
import AButton from "../atoms/AButton";
import React, {ComponentProps} from "react";

type TProps = ComponentProps<"form">;

export default function FormModal({children, ...formProps}: TProps) {
  return (
    <form {...formProps}>
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
      {children}
      <div className="sticky bottom-0 flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
        <AButton type="submit" variant="primary">
          Create Request
        </AButton>
      </div>
    </form>
  );
}
