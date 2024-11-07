<script setup lang="ts">
const items = [
  [{
    label: 'Главная',
    icon: 'i-heroicons-book-open',
    to:'/'

  }],
  [{
    label: 'Пройти тест',
    icon: 'i-heroicons-circle-stack',
    to:'/1'

  },
  {
    label: 'Профили',
    icon: 'i-heroicons-cube-transparent',
    to:'/profile'
  }]
]
</script>

<template>
  <UNavigationMenu color="neutral" :items="items" />
</template>

<style scoped>

</style>