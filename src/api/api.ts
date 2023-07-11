import axios from "axios";
import { BASE_URL } from "../constant/url";

export const axiosInstance = axios.create();

export function makeUrl(route: string): string {
  return BASE_URL + route;
}