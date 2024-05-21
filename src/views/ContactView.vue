<script setup>
import {defineProps, onMounted} from 'vue';

const props = defineProps({
  changeCurrentRoute: Function
});

onMounted(async () => {
  props.changeCurrentRoute("/contact-me");
  document.title = "Contact me - Alan Hilarion";
});

</script>

<template>
  <div class="h-full w-full flex items-center justify-start">
    <div class="flex flex-col items-center justify-start w-80 h-full border-r border-stroke transition-all">
    </div>
  </div>
</template>