import { defineStore } from "pinia";
import {
  dataSubmit,
  fetchUserProfile,
} from "@/shared/api/request/fetchDataHandler";
import { clearToken, getToken, setToken } from "@/shared/lib";

export const useUserStore = defineStore("user", {
  state: (): UserInfo => {
    return {
      fullName: "",
      email: "",
      password: "",
      isAuth: Boolean(getToken("token")),
    };
  },
  getters: {},
  actions: {
    async login(query: string) {
      const dataFields = {
        email: this.email,
        password: this.password,
        fullName: this.fullName,
      };
      const response = await dataSubmit(query, dataFields);
      setToken("token", response.data.token);
      const token = getToken("token");
      this.isAuth = true;
      this.fullName = await this.getUserInfo("auth_me", token);
    },
    async register(query: string) {
      const dataFields = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      };
      const response = await dataSubmit(query, dataFields);
      setToken("token", response.data.token);
      const token = getToken("token");
      this.isAuth = true;
      this.fullName = await this.getUserInfo("auth_me", token);
    },
    async logout() {
      this.isAuth = false;
      this.fullName = "";
      this.email = "";
      this.password = "";
      clearToken("token");
    },
    async getUserInfo(query: string, token: string | null) {
      const abc = await fetchUserProfile(query, token);
      this.fullName = abc.fullName;
      return abc.fullName;
    },
  },
});

interface UserInfo {
  fullName: string;
  email: string;
  password: string;
  isAuth?: boolean;
}
