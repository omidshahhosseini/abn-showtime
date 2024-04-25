import { SHOWS_ENDPOINT } from "../api";
import { useTVShowAPI } from "./useTVShowAPI";

export const useGetTvShows = () => useTVShowAPI(SHOWS_ENDPOINT);
