import {defineStore} from "pinia";

export const useWebsiteStore = defineStore('websiteStore', () => {
    const sum = ref(0)
    function increment(count: number) {
        sum.value += count
    }

    return { sum, increment }
})