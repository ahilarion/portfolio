<script setup>
import {defineProps, onMounted} from 'vue';

  const props = defineProps({
    changeCurrentRoute: Function
  });

  onMounted(async () => {
    props.changeCurrentRoute("/about-me");
    document.title = "About Me - Alan Hilarion";
  });
</script>

<template>
  <div class="h-full w-full flex items-center justify-start">
    <div class="flex flex-col items-center justify-start w-16 xl:w-16 h-full border-r border-stroke transition-all">

    </div>
    <div class="flex flex-col items-center justify-start w-48 xl:w-64 h-full border-r border-stroke transition-all">


    </div>
  </div>
</template>

<style scoped>

</style>