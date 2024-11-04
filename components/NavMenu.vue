<script setup lang="ts">
const items = [
  [{
    label: '',
    icon: 'i-heroicons-book-open',
    to:'/'

  }],
  [{
    label: 'Тест',
    icon: 'i-heroicons-circle-stack',
    to:'/test'

  },
  {
    label: 'Профили колледжа',
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