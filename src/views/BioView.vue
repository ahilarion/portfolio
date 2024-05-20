<script setup>
import { ref, onMounted  } from 'vue';

const textContentRef = ref(null);
const lineCount = ref(0);

const countLines = () => {
  const textContent = textContentRef.value;
  if (textContent) {
    const lineHeight = parseFloat(getComputedStyle(textContent).lineHeight);
    const totalHeight = textContent.scrollHeight;
    lineCount.value = Math.ceil(totalHeight / lineHeight);
  }
};

onMounted(() => {
  countLines();
});

</script>

<template>
  <div class="flex flex-col items-center justify-start w-full h-full transition-all">
    <div class="h-8 w-full flex items-center justify-start border-b border-stroke">
      <div class="flex items-center justify-start gap-2 border-r border-stroke px-4 h-full">
        <span class="text-text">bio</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-text w-4 h-4 cursor-pointer" viewBox="0 0 384 512">
          <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </div>
    </div>
    <div class="flex-1 flex items-start justify-start w-full p-4">
      <div class="flex">
        <div class="line-numbers flex flex-col text-right pr-4 text-[#8b8b8b]">
          <div v-for="n in lineCount" :key="n">{{ n }}</div>
        </div>
        <div ref="textContentRef" class="text-content text-text text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloremque eaque exercitationem facere libero
          odit placeat, qui ratione, recusandae sunt, tenetur velit? Blanditiis dolore doloribus earum, eligendi, error
          est facere mollitia, non pariatur provident quia quisquam quod rem repellendus voluptas! Aliquam commodi
          consequuntur cumque dignissimos ducimus, facere illo non odit perferendis possimus quia, reprehenderit sequi
          tenetur. Adipisci atque, consectetur dignissimos dolores eveniet expedita fuga laboriosam libero magnam
          officiis perferendis possimus quasi quod, ratione recusandae rem repudiandae saepe! Ab aliquid autem ducimus
          ea est modi nam necessitatibus, nesciunt numquam, odit placeat quas quasi repudiandae? Aperiam architecto
          inventore ipsa vel voluptas voluptatibus?
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
