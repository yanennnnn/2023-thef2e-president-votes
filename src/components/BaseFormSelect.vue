<script setup>
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  options: {
    type: Object,
    default: () => {},
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'default',
    required: true,
  },
  placeholder: {
    type: String,
    default: '請選擇',
  },
  type: {
    type: String,
    default: 'text',
  },
  hiddenLabel: {
    type: Boolean,
    default: false,
  },
});
const dropdown = ref(false);
const onChange = (val) => {
  emit('update:modelValue', val);
  dropdown.value = false;
};
const selectText = computed(() => props.options.find((item) => item.value === props.modelValue)?.text || '');
const target = ref(null);
onClickOutside(target, () => {
  dropdown.value = false;
});
</script>
<template>
  <div class="w-full">
    <label v-if="!hiddenLabel" :for="name" :class="{ hidden: hiddenLabel }">{{
      label
    }}</label>
    <div ref="target" class="relative">
      <div class="relative block" @click.stop="dropdown = !dropdown">
        <input
          :ref="name"
          v-model.trim="selectText"
          :name="name"
          type="text"
          readonly
          class="text-center w-full px-4 py-2 text-2xl bg-transparent border border-white text-white rounded-[16px] placeholder:text-white"
          :class="{ 'mt-2': hiddenLabel }"
          :placeholder="placeholder"
        />
        <slot>
          <span class="absolute inset-y-0 right-4 flex items-center" :class="{ 'top-2': hiddenLabel }">
            <img src="@/assets/imgs/chevron-down.svg" alt="" width="19">
          </span>
        </slot>
      </div>
      <ul
        v-if="dropdown"
        class="z-10 absolute mt-6 w-full rounded border shadow-input top-10 right-0 lefe-0 h-[336px] overflow-auto"
        s
      >
        <li
          v-for="(item, $index) in options"
          :key="$index"
          class="cursor-pointer select-none p-3 text-xl text-white hover:bg-blue hover:text-white"
          @click="onChange(item.value)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style></style>
