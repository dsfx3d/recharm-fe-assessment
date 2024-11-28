import {UrlArraySchema} from "@/lib/schemas/UrlArrayschema";
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
    (index: number) => ({
      ...registerControl(`urls.${index}.url`),
    }),
    [registerControl],
  );
  const append = useCallback(
    () => fields.length < maxUrls && appendUrl({url: ""}),
    [appendUrl, fields.length, maxUrls],
  );
  const toError = (index: number) => errors.urls?.[index]?.url?.message;
  const submit = useCallback(
    (e?: React.BaseSyntheticEvent) =>
      handleSubmit(({urls}) => alert(JSON.stringify(toSolution(urls))))(e),
    [handleSubmit],
  );
  return {fields, register, submit, toError, append, remove};
}

const toSolution = (urls: UrlArraySchema["urls"]) => {
  return JSON.stringify(
    urls.map(({url}) => ({
      url,
      value: new URL(url).pathname.slice(1),
    })),
  );
};
