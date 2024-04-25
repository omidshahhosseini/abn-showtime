import { API_BASE_URL } from "../api";
import { useFetch } from "../useFetch";

export const useTVShowAPI = (url: string) => useFetch(API_BASE_URL + url);
