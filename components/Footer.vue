<script setup lang="ts">

</script>

<template>
  <UContainer
      class="mt-16 grid grid-cols-2 gap-6 bg-black text-white text-center">
    <div class="max-w-3xl col-span-2 sm:col-span-1 flex flex-col">
      <UButton
          class="mt-4"
          size="xl"
          to="https://chpk.rchuv.ru"
          variant="soft"
          color="primary"
          block>
        Официальный сайт
      </UButton>
      <span class="my-3 text-xl">Контактная информация</span>
      <div class="flex justify-between my-2">
        <span>Электронная почта:</span>
        <span>chpk-nik@rchuv.ru</span>
      </div>
      <div class="flex justify-between my-2">
        <span>Социальные сети:</span>
        <span>

         <UTooltip text="ВКонтакте">
          <NuxtLink target="_blank" to="https://vk.com/id555738436">
          <UIcon name="i-brandico-vkontakte-rect" class="mx-2 size-7" dynamic/>
        </NuxtLink>
        </UTooltip>

        <UTooltip text="GitHub">
          <NuxtLink target="_blank" to="https://github.com/edik25489">
          <UIcon name="i-fa-brands-github-square" class=" mx-2 size-7" dynamic/>
        </NuxtLink>
        </UTooltip>

        <UTooltip text="Telegram">
          <NuxtLink target="_blank" to="https://t.me/EdYakovlev">
          <UIcon name="i-fa6-brands-telegram" class=" mx-2 size-7" dynamic/>
        </NuxtLink>
        </UTooltip>

      </span>
      </div>
    </div>
    <div class="col-span-2 my-5">2024 | Все права защищены</div>
  </UContainer>
</template>

<style scoped>

</style>