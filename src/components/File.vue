<script setup>
  import {defineProps} from 'vue';

  const props = defineProps({
    to: String,
  });
</script>

<template>
  <router-link class="flex items-center justify-between w-full h-8 border-b border-stroke transition-all pl-10" :to="to">
    <div class="flex items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="fill-text w-4 h-4" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
      <slot></slot>
    </div>
  </router-link>
</template>

<style scoped>

</style>