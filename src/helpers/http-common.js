import axios from "axios";

import appConfig from "#/configs/app.config";

const instance = axios.create({
  baseURL: `${appConfig.apiBaseUrl}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 90000,
});

export default instance;
