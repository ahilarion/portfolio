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

</template>

<style scoped>

</style>