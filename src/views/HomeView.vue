<template>
  <div class="h-full w-full flex items-center justify-between p-5 sm:px-20 md:px-40 xl:px-80 transition-all">
    <div class="flex flex-col items-start gap-20">
      <div class="flex flex-col items-start gap-4">
        <p class="text-white text-xl sm:text-3xl">
          Hi all, I am
        </p>
        <h1 class="text-white text-3xl sm:text-6xl">
          Alan Hilarion
        </h1>
        <div class="flex items-center justify-start">
          <p class="text-sp-blue text-xl sm:text-3xl mr-2">></p>
          <p id="demo" class="text-sp-blue text-xl sm:text-3xl"></p>
          <p class="text-white text-xl sm:text-3xl text-cursor animate-blink">|</p>
        </div>
      </div>
      <div class="flex flex-col items-start gap-4">
        <p class="text-text text-sm sm:text-xl">
          // you can also see my Github page
        </p>
        <p class="text-sm md:text-xl select-none">
          <span class="text-sp-blue">const </span>
          <span class="text-sp-green">githubLink </span>
          <span class="text-white">= </span>
          <a href="https://github.com/ahilarion" class="text-sp-orange underline" target="_blank" rel="noopener noreferrer">
            "https://github.com/ahilarion"
          </a>
        </p>
      </div>
    </div>
    <div class="hidden lg:flex items-center justify-center">
      <img src="@/assets/jiji.png" alt="Alan Hilarion" class="rounded-full w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import {defineProps} from 'vue';

const text = "Full-stack developer";
let i = 0;

const props = defineProps({
  changeCurrentRoute: Function
});

onMounted(async () => {
  const speed = 150;
  const element = document.getElementById("demo");
  const cursor = document.querySelector(".text-cursor");

  props.changeCurrentRoute("/");
  document.title = "Home - Alan Hilarion";

  if (element.textContent.length > 0) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    cursor.classList.add("hidden");
    element.style.backgroundColor = "#0d47a1";

    await new Promise(resolve => setTimeout(resolve, 1000));

    element.textContent = "";

    cursor.classList.remove("hidden");
    element.style.backgroundColor = "transparent";
  }

  await new Promise(resolve => setTimeout(resolve, 1000));

  while (i < text.length) {
    cursor.classList.remove("animate-blink");
    element.textContent += text.charAt(i);
    i++;
    await new Promise(resolve => setTimeout(resolve, speed));
  }

  cursor.classList.add("animate-blink");
});
</script>

<style scoped>
@keyframes blink {
  from, to { opacity: 1 }
  50% { opacity: 0 }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>