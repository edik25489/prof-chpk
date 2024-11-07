<script setup lang="ts">
import {useWebsiteStore} from "~/stores/summ";
const store = useWebsiteStore();
const items = ref([
  {
    label: 'Создать приложение для упрощения работы людей',
    value: '1'
  },
  {
    label: 'Провести мастер-класс для детей',
    value: '3'
  },
  {
    label: 'Написать рассказ или создать художественное произведение',
    value: '8'
  }
])

const value = ref('1')
</script>

<template>
  <NavMenu/>
  <UContainer class="my-4 text-xl">Вопрос № 3</UContainer>
  <UContainer class="my-4 text-lg">Какую задачу выбрал бы Ваш ребенок?</UContainer>
  <UContainer class="my-4">
    <URadioGroup required size="xl" v-model="value" :items="items" />
  </UContainer>
  <UContainer class="flex justify-around align-center">
    <UButton color="info" @click="store.sum=0, navigateTo('/1')" icon="i-lucide-arrow-left">Заново</UButton>
    <UButton @click="store.increment(parseInt(value)), navigateTo('/test')" trailing-icon="i-lucide-arrow-right">Результат</UButton>
  </UContainer>
</template>
<style scoped>

</style>