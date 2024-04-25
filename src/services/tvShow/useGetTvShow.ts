import { SHOW_ENDPOINT } from "../api";
import { useTVShowAPI } from "./useTVShowAPI";

export const useGetTvShow = (id: string) =>
  useTVShowAPI(SHOW_ENDPOINT.replace(":id", id) + "?embed=cast");
