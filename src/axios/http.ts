import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8080/api/v1/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Add a request interceptor
    this.instance.interceptors.request.use(async (config) => {
      //do some thing
      return config;
    });

    // Add response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
