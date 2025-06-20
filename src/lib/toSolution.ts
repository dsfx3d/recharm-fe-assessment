import {SolutionSchema} from "./schemas/SolutionSchema";
import {UrlArraySchema} from "./schemas/UrlArraySchema";

export const toSolution = (payload: UrlArraySchema): string => {
  const solution = payload.urls.map(({url}) => ({
    url,
    value: new URL(url).pathname.slice(1),
  }));
  const result = SolutionSchema.safeParse(solution);

  return JSON.stringify(result.data);
};
