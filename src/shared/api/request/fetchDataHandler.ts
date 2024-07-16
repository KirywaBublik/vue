import axios, { type AxiosResponse } from "axios";
import type { ResponseData } from "@/shared/api/model/requestType";

const BASE_URL = "https://affdf12e9349600c.mokky.dev/";

export const dataFetch = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const dataSubmit = async (
  query: string,
  data: any,
): Promise<AxiosResponse<ResponseData> | any> => {
  try {
    return await axios.post<ResponseData>(`${BASE_URL}${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserProfile = async (query: string, token: string | null) => {
  try {
    const response = await axios.get(`${BASE_URL}${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
