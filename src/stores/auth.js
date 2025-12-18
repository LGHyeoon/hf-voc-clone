import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        token: localStorage.getItem("access_token"),
    }),
    getters: {
        isLoggedIn: (state) => !!state.token
    },
    actions: {
        login(token) {
            this.token = token;
            localStorage.setItem("access_token", token);
        },
        logout() {
            this.token = null;
            localStorage.removeItem("access_token");
        }
    }
})