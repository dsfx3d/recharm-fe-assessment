import {UrlArraySchema} from "@/lib/schemas/UrlArraySchema";
import {useCallback} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

type Opts = {
  maxUrls: number;
  initialUrls: string[];
};

export function useUrlArrayForm({maxUrls, initialUrls}: Opts) {
  const {
    control,
    register: registerControl,
    handleSubmit,
    formState: {errors},
  } = useForm<UrlArraySchema>({
    resolver: zodResolver(UrlArraySchema),
    defaultValues: {urls: initialUrls.map(url => ({url}))},
  });
  const {
    fields,
    append: appendUrl,
    remove,
  } = useFieldArray({control, name: "urls"});

  const register = useCallback(
    (index: number) => registerControl(`urls.${index}.url`),
    [registerControl],
  );
  const append = useCallback(() => {
    if (fields.length < maxUrls) {
      appendUrl({url: ""});
    }
  }, [appendUrl, fields.length, maxUrls]);

  const toError = (index: number) => {
    if (errors.urls?.[index]?.url?.message) {
      return "Enter a valid URL";
    }
  };
  return {fields, register, handleSubmit, toError, append, remove};
}
