<script setup>
import BaseFormSelect from './BaseFormSelect.vue'
import { taiwanCitys } from '@/utils/address.js'
import { ref, watch } from 'vue'
const districts = ref('')
const districtsOptions = ref([])
const city = ref('')
const cityOptions = taiwanCitys.map((item)=> {
  return {
    text: item.name,
    value: item.name,
  }
})
watch(city, ()=> {
  districts.value = '';
  const cityFilter =  taiwanCitys.filter((cityItem) => city.value === cityItem.name)
  if(cityFilter.length) {
    districtsOptions.value = cityFilter[0].districts.map((item)=> {
    return {
      text: item.name,
      value: item.name,
    }
  })
  }
})
</script>

<template>
    <div class="grid grid-rows-1 grid-flow-col gap-4">
      <div class="flex col-span-3">
        <button class="block w-full px-4 py-2 text-2xl bg-transparent border border-white text-white rounded-[16px] shadow-none">全國</button>
        <BaseFormSelect
          v-model="city"
          placeholder="縣市"
          name="city"
          :options="cityOptions"
        />
        <BaseFormSelect
          v-model="districts"
          placeholder="鄉鎮"
          name="districts"
          :options="districtsOptions"
        />
      </div>
      <div class="">
        <input type="text">
      </div>
    </div>
</template>

<style>

</style>