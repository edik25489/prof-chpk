<script setup lang="ts">
import {useWebsiteStore} from "~/stores/summ";
const store = useWebsiteStore();
const items = ref([
  {
    label: 'Заниматься программированием или изучать новые технологии',
    value: '1'
  },
  {
    label: 'Чтение книг и общение с друзьями.',
    value: '3'
  },
  {
    label: 'Участвовать в творческих мастерских или заниматься хобби',
    value: '8'
  }
])

const value = ref('1')
</script>

<template>
  <NavMenu/>
  <UContainer class="my-4 text-xl">Вопрос № 2</UContainer>
  <UContainer class="my-4 text-lg">Как предпочитает проводить свободное время Ваш ребенок?</UContainer>
  <UContainer class="my-4">
    <URadioGroup required size="xl" v-model="value" :items="items" />
  </UContainer>
  <UContainer class="flex justify-around align-center">
    <UButton color="info" @click="store.sum=0, navigateTo('/1')" icon="i-lucide-arrow-left">Заново</UButton>
    <UButton @click="store.increment(parseInt(value)), navigateTo('/3')" trailing-icon="i-lucide-arrow-right">Вперед</UButton>
  </UContainer>
</template>
<style scoped>

</style>