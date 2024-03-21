import axios from "axios";
import { getAccessToken, loginUser, setAccessToken } from "./storage";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URI;

// fetchData 함수 정의

type RefreshResponse = {
  access: string;
};

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const { data } = await axios.get(SERVER_URL + url);
    return data as T;
  } catch (error) {
    throw new Error("Unable to fetch data : " + error);
  }
};

export const fetchDataAuthorized = async <T>(url: string): Promise<T> => {
  let errorCount = 0;
  while (errorCount < 3) {
    try {
      const res = await axios.get(SERVER_URL + url, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 401) {
        const refreshRes = await fetchPostData<RefreshResponse>(
          "/api/token/refresh/"
        );
        setAccessToken(refreshRes.access);
        errorCount++;
        continue;
      }

      return res.data as T;
    } catch (error: any) {
      console.error("Unable to fetch data : " + error);
    }
  }

  throw new Error("Unable to fetch data : " + errorCount);
};

const fetchPostData = async <T>(url: string): Promise<T> => {
  try {
    const { data } = await axios.post(SERVER_URL + url, {
      refresh: localStorage.getItem("refresh"),
    });
    return data as T;
  } catch (error) {
    throw new Error("Unable to fetch data : " + error);
  }
};
