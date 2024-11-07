<script setup lang="ts">
import {useWebsiteStore} from "~/stores/summ";
const store = useWebsiteStore();
function header (){
  if (store.sum === 3 || store.sum === 5 || store.sum === 10){
    return 'Техника - твой путь, дерзай и создавай'
  }
  else if (store.sum === 7 || store.sum === 9 || store.sum === 14){
    return 'Сердце горит желанием учить'
  }
  else if (store.sum === 17 || store.sum === 19 || store.sum === 24){
    return 'В мир красок ярких,шрифтов и идей'
  }
}
function image (){
  if (store.sum === 3 || store.sum === 5 || store.sum === 10){
    return `itog1.png`
  }
  else if (store.sum === 7 || store.sum === 9 || store.sum == 14){
    return `itog3.png`
  }
  else if (store.sum === 17 || store.sum === 19 || store.sum === 24){
    return `itog2.png`
  }
}
function linkResult(){
  if (store.sum === 3 || store.sum === 5 || store.sum === 10){
    return '/teh'
  }
  else if (store.sum === 7 || store.sum === 9 || store.sum === 14){
    return '/pedagog'
  }
  else if (store.sum === 17 || store.sum === 19 || store.sum === 24){
    return '/reklama'
  }
}
function textResult() {
  if (store.sum === 3 || store.sum === 5 || store.sum === 10){
    return 'Техническое'
  }
  else if (store.sum == 7 || store.sum == 9 || store.sum == 14){
    return 'Педагогическое'
  }
  else if (store.sum === 17 || store.sum === 19 || store.sum === 24){
    return 'Творческое'
  }
}
</script>

<template>
  <NavMenu/>
  <UContainer class="mt-4 flex flex-row justify-center align-center">
    <p v-if="store.sum != 12" class="text-xl">Вашему ребенку подойдет <span class="mx-2 text-green-500 bg-blue-50">{{textResult()}}</span> направление </p>
    <p v-else class="text-xl"> Вы не определились с выбором направления для вашего ребенка. Попробуйте пройти тест заново по ссылке в верхнем меню</p>
  </UContainer>

  <UContainer class="mt-8 flex flex-row justify-center align-center">
      <UCard v-if="store.sum != 12">
        <template #header>
          <div >
            {{header()}}
          </div>
        </template>

        <div class="flex flex-row justify-center">
            <img :src=image()  style="height:300px; object-fit: cover;"/>
        </div>
        <template #footer>
          <div class="text-right">
            <UButton block color="secondary" :to=linkResult()>
              Узнать подробнее
            </UButton>
          </div>

        </template>
      </UCard>
  </UContainer>

</template>

<style scoped>

</style>