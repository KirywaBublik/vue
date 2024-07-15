import axios from "axios";
import { getToken, setToken } from "@/shared/lib/";
import type { dataPropWithPagination, userType } from "@/shared/api";
import { data } from "@/pages/RegisterPage/model/constants";

const BASE_URL = "https://affdf12e9349600c.mokky.dev/";

const token = getToken("token");

export const dataFetch = async (
  query: string,
): Promise<dataPropWithPagination | undefined> => {
  try {
    const response = await axios.get<dataPropWithPagination>(
      `${BASE_URL}/${query}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const dataSubmit = async (query: string, data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...data,
    });
    setToken("token", response.data.token);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserProfile = async (query: string) => {
  if (token) {
    try {
      const response = await axios.get<userType>(`${BASE_URL}${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setToken("name", response.data.fullName);
    } catch (error) {
      console.log(error);
    }
  }
};
// TODO
export const dataSubmitRegister = async () => {
  const response = await axios.post(
    "https://affdf12e9349600c.mokky.dev/register",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      fullName: data.value[0].model,
      email: data.value[1].model,
      password: data.value[2].model,
    },
  );
  setToken("token", response.data.token);
};
