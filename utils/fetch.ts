import axios from "axios";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URI;

// fetchData 함수 정의

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const { data } = await axios.get(SERVER_URL + url);
    return data as T;
  } catch (error) {
    throw new Error("Unable to fetch data : " + error);
  }
};

export default fetchData;
