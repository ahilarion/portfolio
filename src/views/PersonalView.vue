<script setup>
import Folder from "@/components/Folder.vue";
import File from "@/components/File.vue";

</script>

<template>
  <div class="flex flex-col items-center justify-start w-full h-8">
    <Folder folder-name="personal" folder-color="fill-amber-300">
      <File to="/about-me/hobbies/sports">
        <span class="text-text">bio</span>
      </File>
    </Folder>
  </div>
</template>