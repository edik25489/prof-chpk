<script setup lang="ts">
import {useWebsiteStore} from "~/stores/summ";
const store = useWebsiteStore();
store.sum = 0
const items = ref([
  {
    label: 'Решать логические задачи и работать с технологиями',
    value: '1'
  },
  {
    label: 'Обучать других и делиться знаниями',
    value: '3'
  },
  {
    label: 'Создавать что-то новое, например, искусство или дизайн',
    value: '8'
  }
])

const value = ref('1')
</script>

<template>
  <NavMenu/>
  <UContainer class="my-4 text-xl">Вопрос № 1</UContainer>
  <UContainer class="my-4 text-lg">Какой вид деятельности больше всего понравится Вашему ребенку?</UContainer>
  <UContainer class="my-4">
    <URadioGroup required size="xl" v-model="value" :items="items" />
  </UContainer>
  <UContainer class="flex justify-around align-center">
    <UButton color="info" to="/" icon="i-lucide-arrow-left">Отменить</UButton>
    <UButton @click="store.increment(parseInt(value)), navigateTo('/2')" trailing-icon="i-lucide-arrow-right">Вперед</UButton>
  </UContainer>
</template>

<style scoped>

</style>