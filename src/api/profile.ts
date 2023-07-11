import { AxiosResponse } from "axios";
import { axiosInstance, makeUrl } from "./api";
import { REGISTER_BANK_URL, UPDATE_USER_URL } from "../constant/url";
import { UserDetails, BankDetails } from "../types";

export async function updateUser(userDetails: UserDetails, token: string): Promise<AxiosResponse<any, any> | void> {
  const url = makeUrl(UPDATE_USER_URL + '/');
  console.log(url);
  try {
    const response = await axiosInstance.post(url, {
      first_name: userDetails.firstName,
      last_name: userDetails.lastName,
      dob: userDetails.dob,
      gender: userDetails.gender,
      pincode: userDetails.pincode,
    }, 
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      }, 
    });
    console.log(response.data);
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}

export async function registerBank(bankDetails: BankDetails, token: string): Promise<AxiosResponse<any, any> | void> {
  const url = makeUrl(REGISTER_BANK_URL + '/');
  console.log(url);
  try {
    const response = await axiosInstance.post(url, {
      account_number: bankDetails.number,
      account_name: bankDetails.name,
      ifsc_code: bankDetails.ifsc,
    },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`,
        },
      });
    console.log(response.data);
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}