<script setup lang="ts">

</script>

<template>
  <NavMenu/>
  <UContainer class="mt-4 flex flex-row justify-center align-center">
    <p class="text-xl underline decoration-sky-500">Выберите карточку с утверждением</p>
  </UContainer>

  <UContainer class="mt-8 flex flex-row justify-center align-center">
      <UCard>
        <template #header>
          <div class="h-8">
            Сердце горит желанием учить
          </div>
        </template>

        <div class="h-32 flex flex-row justify-center">
            <img class="h-32" src="../assets/итог3.png"  style="object-fit: cover;"/>
        </div>
        <template #footer>
          <div class="text-right">
            <UButton color="secondary" to="/pedagog">
              Узнать подробнее
            </UButton>
          </div>

        </template>
      </UCard>
  </UContainer>

  <UContainer class="mt-5 flex flex-row justify-center align-center">
    <UCard>
      <template #header>
        <div class="h-8">
         Техника - твой путь, дерзай и создавай
        </div>
      </template>

      <div class="h-32 flex flex-row justify-center">
          <img class="h-32" src="../assets/итог1.png"  style="object-fit: cover;"/>
      </div>
      <template #footer>
        <div class="text-right">
          <UButton color="secondary" to="/teh">
            Узнать подробнее
          </UButton>
        </div>

      </template>
    </UCard>
  </UContainer>

  <UContainer class="mt-5 flex flex-row justify-center align-center">
    <UCard>
      <template #header>
        <div class="h-8">
          В мир красок ярких,шрифтов и идей
        </div>
      </template>

      <div class="h-32 flex flex-row justify-center">

          <img class="h-32" src="../assets/итог2.png"  style="object-fit: cover;"/>

      </div>
      <template #footer>
        <div class="text-right">
          <UButton color="secondary" to="/reklama">
            Узнать подробнее
          </UButton>
        </div>

      </template>
    </UCard>
  </UContainer>

</template>

<style scoped>

</style>