import { SEARCH_SHOWS_ENDPOINT } from "../api";
import { useTVShowAPI } from "./useTVShowAPI";

export const useSearchShows = (query: string) =>
  useTVShowAPI(`${SEARCH_SHOWS_ENDPOINT}?q=${query}`);
