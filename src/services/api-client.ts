import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY, //Get API key from above link
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return AxiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(
      (res) => res.data
    );
  };

  get = (id: string | number) => {
    return AxiosInstance.get<T>(this.endpoint + "/" + id).then(
      (res) => res.data
    );
  };
}

export default APIClient;
