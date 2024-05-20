<script setup>
import {defineProps, onMounted} from 'vue';

  const props = defineProps({
    changeCurrentRoute: Function
  });

  onMounted(async () => {
    props.changeCurrentRoute("/projects");
    document.title = "Projects - Alan Hilarion";
  });

</script>

<template>

</template>

<style scoped>

</style>