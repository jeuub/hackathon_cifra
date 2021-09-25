import axios from "axios";
import {ApiInformation} from "../utils/const";

export const createAPI = () => {
  const api = axios.create({
    baseURL: ApiInformation.BASE_URL,
    timeout: ApiInformation.TIMEOUT,
    withCredentials: ApiInformation.WITH_CREDENTIALS
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;


    console.log(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
