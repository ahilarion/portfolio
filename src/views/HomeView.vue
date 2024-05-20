<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="flex flex-col items-start gap-4">
      <div class="flex flex-col items-start gap-4">
        <p class="text-white text-3xl">
          Hi all, I am
        </p>
        <h1 class="text-white text-6xl">
          Alan Hilarion
        </h1>
        <div class="flex items-center justify-start">
          <p class="text-sp-blue text-3xl mr-2">></p>
          <p id="demo" class="text-sp-blue text-3xl"></p>
          <p class="text-white text-3xl animate-blink">|</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const text = "Full-stack developer";
let i = 0;

onMounted(async () => {
  const speed = 200;
  const element = document.getElementById("demo");

  if (element.textContent.length > 0) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    element.style.backgroundColor = "#0d47a1";

    await new Promise(resolve => setTimeout(resolve, 1000));

    element.textContent = "";

    element.style.backgroundColor = "transparent";
  }

  await new Promise(resolve => setTimeout(resolve, 1000));

  while (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    await new Promise(resolve => setTimeout(resolve, speed));
  }
});
</script>

<style scoped>
@keyframes blink {
  from, to { opacity: 1 }
  50% { opacity: 0 }
}

.animate-blink {
  animation: blink 0.5s step-end infinite;
}
</style>