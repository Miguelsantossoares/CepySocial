import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", () => {
    const user = ref({
        name: "Matt",
        email: "matt@learnvue.com",
    });

    if (localStorage.getItem("user")) {
        user.value = JSON.parse(localStorage.getItem("user"))
    }

    watch(
        user,
        (userVal) => {
            localStorage.setItem("user", JSON.stringify(userVal))
        },
        { deep: true }
    )

    const website = computed(() =>
        user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
    );

    const changeName = (newName) => {
        user.value.name = newName
    }

    return {

        user,
        website,
        changeName,
    }
});