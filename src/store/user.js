import { defineStore } from 'pinia';

export const useUserStore =
defineStore("user", {
    state: () => ({
        users: []
    }),
    actions: {
        createUser(user) {
        return  this.$state.users.push(user)
        }
    },
    persist: true
});