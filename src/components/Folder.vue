<script setup>

import {defineProps, ref} from 'vue';

const props = defineProps({
  folderName: String,
  folderColor: String,
});

let currentColor;

if (props.folderColor) {
  currentColor = props.folderColor;
} else {
  currentColor = "fill-text";
}

const isOpen = ref(true);


</script>

<template>
  <div class="flex flex-col items-center justify-start w-full cursor-pointer select-none">
    <div class="flex items-center justify-between w-full h-8 border-b border-stroke transition-all px-5" @click="isOpen = !isOpen">
      <div class="flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" :class="currentColor" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>
        <span class="text-text">{{ folderName }}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" :class="isOpen ? '-scale-y-100' : 'scale-y-100'" class="transition-all fill-text w-4 h-4" viewBox="0 0 448 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
    </div>
    <div class="w-full" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>