import axios from "axios";
import { AsyncStorage } from "react-native";
const instance = axios.create({ baseURL: "http://localhost:5000" });

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("userId");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
