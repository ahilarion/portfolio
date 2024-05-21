<script setup>
import {onMounted, ref} from 'vue';
import router from "@/router/index.js";

const dynamicLineCount = ref(0);

function updateLineCount() {
  const textContent = document.querySelector('.text-content');
  if (textContent) {
    const lineHeight = parseFloat(getComputedStyle(textContent).lineHeight);
    const totalHeight = textContent.scrollHeight;
    dynamicLineCount.value = Math.ceil(totalHeight / lineHeight);
  }
}

function goToParent() {
  router.push("/about-me/personal");
  updateLineCount();
}

onMounted(() => {
  updateLineCount();
});

</script>

<template>
  <div class="flex flex-col items-center justify-start w-full h-full transition-all">
    <div class="h-8 w-full flex items-center justify-start border-b border-stroke">
      <div class="flex items-center justify-start gap-2 border-r border-stroke px-4 h-full">
        <span class="text-text">bio</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-text w-4 h-4 cursor-pointer" viewBox="0 0 384 512" @click="goToParent">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </div>
    </div>
    <div class="flex-1 flex items-start justify-start w-full p-4">
      <div class="grid grid-cols-[1fr_30fr] w-full">
        <div class="line-numbers flex flex-col text-right pr-4 text-[#8b8b8b] select-none">
          <div v-for="n in dynamicLineCount" :key="n">{{ n }}</div>
        </div>
        <div class="text-content text-text text-justify h-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus dignissimos incidunt natus non odit voluptates voluptatum! Blanditiis cumque deserunt eum excepturi iste, magni modi ratione reprehenderit suscipit velit veritatis vitae! Adipisci, aperiam architecto asperiores at corporis cupiditate dolore dolores ducimus error et eum ex exercitationem illum incidunt laboriosam laborum laudantium magni modi molestiae necessitatibus neque nihil non odit perspiciatis quas quasi quisquam quod reiciendis repellat sequi, similique sit soluta suscipit tempora temporibus, unde voluptas. Accusamus at consequatur consequuntur cumque distinctio dolorum eaque earum eligendi esse eum eveniet fuga id, illo iste maiores modi natus necessitatibus nostrum obcaecati officia omnis placeat porro possimus quam quia quos reiciendis reprehenderit repudiandae sapiente sequi, tempora tempore tenetur totam velit veniam, vero voluptates? Atque in obcaecati recusandae.
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-content {
  line-height: 1.5;
}
</style>
