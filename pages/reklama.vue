<script setup lang="ts">

</script>

<template>
  <NavMenu/>
  <UContainer class="mt-5 flex flex-col justify-center align-center">
    <div>
      <img src="../assets/recl.png"/>
    </div>
    <div>
      <img src="../assets/творч-список.png"/>
    </div>
    <div>
      <img src="../assets/2-2-2.png"/>
    </div>
  </UContainer>
  <UContainer class="mt-4">
    <UButton block to="/profile">
      Список профилей колледжа
    </UButton>
  </UContainer>

  <Footer/>
</template>

<style scoped>

</style>