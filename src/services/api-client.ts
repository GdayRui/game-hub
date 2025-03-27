import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "Get API key by clicking above link",
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
}

export default APIClient;
