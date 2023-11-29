<script setup>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

// const count = ref(0)
</script>

<template>
  <div class="h-[200px] bg-gradient-grey">
    <div class="container">
      <div class="flex py-[50px]">
        <img src="@/assets/imgs/logo.svg" alt="" class="w-[100px]">
        <div class="flex-auto ml-[89px]">
          <ul class="flex h-full mx-auto justify-around relative after:content-[''] after:absolute after:h-[8px] after:w-full after:bg-primary after:bottom-[15px] after:left-0 after:right-0 after:rounded-lg">
            <li class="text-primary grow text-center font-sans text-3xl relative after:content-[''] after:absolute after:w-[37px] after:h-[37px] after:bg-primary after:bottom-[3px] after:left-[50%] after:translate-x-[-50%]  after:rounded-full">
              <span class="absolute left-0 right-0 top-0">2020 第15任總統副總選舉</span>
            </li>
            <li class="text-primary grow font-sans text-center text-3xl relative after:content-[''] after:absolute after:w-[37px] after:h-[37px] after:bg-primary after:bottom-[3px] after:left-[50%] after:translate-x-[-50%]  after:rounded-full">
              <span class="absolute left-0 right-0 top-0">2016</span>
            </li>
            <li class="text-primary grow font-sans text-center text-3xl relative after:content-[''] after:absolute after:w-[37px] after:h-[37px] after:bg-primary after:bottom-[3px] after:left-[50%] after:translate-x-[-50%]  after:rounded-full">
              <span class="absolute left-0 right-0 top-0">2012</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
