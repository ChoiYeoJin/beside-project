import axios from "axios";
import {
  getAccessToken,
  loginUser,
  logoutUser,
  setAccessToken,
} from "./storage";

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
  try {
    let res = await axios.get(SERVER_URL + url, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
    });

    return res.data as T;
  } catch (error: any) {
    if (error.response.status === 401) {
      const refreshRes = await fetchPostData<RefreshResponse>(
        "/api/token/refresh/"
      );
      setAccessToken(refreshRes.access);

      const res = await axios.get(SERVER_URL + url, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
      });

      return res.data as T;
    }

    throw new Error("Unable to fetch data : " + error);
  }
};

const fetchPostData = async <T>(url: string): Promise<T> => {
  try {
    const { data } = await axios.post(SERVER_URL + url, {
      refresh: localStorage.getItem("refresh"),
    });
    return data as T;
  } catch (error: any) {
    if (error.response.status === 401) {
      alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
      logoutUser();
      window.location.href = "/login";
    }
    throw new Error("Unable to fetch data : " + error);
  }
};

export const updateShortcut = async ({
  platform,
  shortcutId,
}: {
  platform: string;
  shortcutId: string;
}) => {
  const url = `/shortcut-keys/click-history/?platform=${platform}&shortcut_id=${shortcutId}`;
  try {
    let res = await axios.post(
      SERVER_URL + url,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      const refreshRes = await fetchPostData<RefreshResponse>(
        "/api/token/refresh/"
      );
      setAccessToken(refreshRes.access);

      const res = await axios.post(
        SERVER_URL + url,
        {},
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    }

    throw new Error("Unable to fetch data : " + error);
  }
};
