<script setup>
import Folder from "@/components/Folder.vue";
import File from "@/components/File.vue";

</script>

<template>
  <div class="flex flex-col items-center justify-start w-64 h-full border-r border-stroke transition-all">
    <div class="flex flex-col items-center justify-start w-full h-8">
      <Folder folder-name="professional" folder-color="fill-amber-300">
        <File to="/about-me/professional/experience">
          <span class="text-text">experience</span>
        </File>
      </Folder>
    </div>
  </div>
  <div class="flex-1 flex items-center justify-center h-full">
    <router-view></router-view>
  </div>
</template>