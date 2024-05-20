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
    <div class="flex flex-col items-center justify-start w-16 h-full border-r border-stroke transition-all">
      <router-link to="/about-me/professional" class="flex items-center justify-center w-full h-16 border-b border-stroke transition-all">
        <span class="text-text">Pro</span>
      </router-link>
      <router-link to="/about-me/personal" class="flex items-center justify-center w-full h-16 border-b border-stroke transition-all">
        <span class="text-text">Per</span>
      </router-link>
      <router-link to="/about-me/hobbies" class="flex items-center justify-center w-full h-16 border-b border-stroke transition-all">
        <span class="text-text">Hob</span>
      </router-link>
    </div>
    <div class="flex flex-col items-center justify-start w-64 h-full border-r border-stroke transition-all">
      <router-view></router-view>
    </div>
    <div class="flex-1 flex items-center justify-center h-full">

    </div>
  </div>
</template>

<style scoped>

</style>