import { AxiosResponse } from "axios";
import { axiosInstance, makeUrl } from "./api";
import { PHONE_VERIFY_URL, REGISTER_GOLD_URL } from "../constant/url";

export async function getOtp(mobile: string | number): Promise<AxiosResponse<any, any>> {
  const url = makeUrl(PHONE_VERIFY_URL + `/${mobile}`);
  const response = await axiosInstance.get(url);

  console.log(response.data);
  return response;
}

export async function getUserToken(mobile: string | number, otp: string | number): Promise<AxiosResponse<any, any> | void> {
  const url = makeUrl(PHONE_VERIFY_URL + `/${mobile}/`);
  console.log(url);
  try {
    const response = await axiosInstance.post(url, { otp }, { headers: { "Content-Type": "application/json" } });
    console.log(response.data);
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}

export async function goldRegister(token: string | number) {
  const url = makeUrl(REGISTER_GOLD_URL + "/");
  console.log(url);
  try {
    const response = await axiosInstance.post(url, { headers: { "Authorization": `Token ${token}` } });
    console.log(response.data);
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}