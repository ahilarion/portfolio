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
  <div class="h-full w-full flex items-center justify-start sized">
    <div class="flex flex-col items-center justify-start w-80 h-full border-r border-stroke transition-all gap-6 py-8">
      <div class="flex items-center justify-start gap-x-4 w-full transition-all fill-stroke hover:fill-text text-text px-10 select-none cursor-pointer">
        <input type="checkbox" id="react" name="react" value="react" class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
        <label class="cursor-pointer" for="react">React</label>
      </div>
      <div class="flex items-center justify-start gap-4 w-full transition-all fill-stroke hover:fill-text text-text px-10 select-none cursor-pointer">
        <input type="checkbox" id="html" name="html" value="html" class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
        <label class="cursor-pointer" for="html">HTML</label>
      </div>
      <div class="flex items-center justify-start gap-4 w-full transition-all fill-stroke hover:fill-text text-text px-10 select-none cursor-pointer">
        <input type="checkbox" id="css" name="css" value="css" class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
        <label class="cursor-pointer" for="css">CSS</label>
      </div>
      <div class="flex items-center justify-start gap-4 w-full transition-all fill-stroke hover:fill-text text-text px-10 select-none cursor-pointer">
        <input type="checkbox" id="vue" name="vue" value="vue" class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>
        <label class="cursor-pointer" for="vue">Vue</label>
      </div>
      <div class="flex items-center justify-start gap-4 w-full transition-all fill-stroke hover:fill-text text-text px-10 select-none cursor-pointer">
        <input type="checkbox" id="laravel" name="laravel" value="laravel" class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M504.4 115.8a5.7 5.7 0 0 0 -.3-.7 8.5 8.5 0 0 0 -.5-1.3 6 6 0 0 0 -.5-.7 9.4 9.4 0 0 0 -.7-.9c-.2-.2-.5-.4-.8-.6a8.8 8.8 0 0 0 -.9-.7L404.4 55.6a8 8 0 0 0 -8 0L300.1 111h0a8.1 8.1 0 0 0 -.9 .7 7.7 7.7 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .2-.4 .5-.5 .7a9.7 9.7 0 0 0 -.5 1.3c-.1 .2-.2 .4-.3 .7a8.1 8.1 0 0 0 -.3 2.1V223.2l-80.2 46.2V63.4a7.8 7.8 0 0 0 -.3-2.1c-.1-.2-.2-.5-.3-.7a8.4 8.4 0 0 0 -.5-1.2c-.1-.3-.4-.5-.5-.7a9.4 9.4 0 0 0 -.7-.9 9.5 9.5 0 0 0 -.8-.6 9.8 9.8 0 0 0 -.9-.7h0L115.6 1.1a8 8 0 0 0 -8 0L11.3 56.5h0a6.5 6.5 0 0 0 -.9 .7 7.8 7.8 0 0 0 -.8 .6 8.2 8.2 0 0 0 -.7 .9c-.2 .3-.4 .5-.6 .7a7.9 7.9 0 0 0 -.5 1.2 6.5 6.5 0 0 0 -.3 .7 8.2 8.2 0 0 0 -.3 2.1v329.7a8 8 0 0 0 4 7l192.5 110.8a8.8 8.8 0 0 0 1.3 .5c.2 .1 .4 .2 .6 .3a7.9 7.9 0 0 0 4.1 0c.2-.1 .4-.2 .6-.2a8.6 8.6 0 0 0 1.4-.6L404.4 400.1a8 8 0 0 0 4-7V287.9l92.2-53.1a8 8 0 0 0 4-7V117.9A8.6 8.6 0 0 0 504.4 115.8zM111.6 17.3h0l80.2 46.2-80.2 46.2L31.4 63.4zm88.3 60V278.6l-46.5 26.8-33.7 19.4V123.5l46.5-26.8zm0 412.8L23.4 388.5V77.3L57.1 96.7l46.5 26.8V338.7a6.9 6.9 0 0 0 .1 .9 8 8 0 0 0 .2 1.2h0a5.9 5.9 0 0 0 .4 .9 6.4 6.4 0 0 0 .4 1v0a8.5 8.5 0 0 0 .6 .8 7.6 7.6 0 0 0 .7 .8l0 0c.2 .2 .5 .4 .8 .6a8.9 8.9 0 0 0 .9 .7l0 0 0 0 92.2 52.2zm8-106.2-80.1-45.3 84.1-48.4 92.3-53.1 80.1 46.1-58.8 33.6zm184.5 4.6L215.9 490.1V397.8L346.6 323.2l45.8-26.2zm0-119.1L358.7 250l-46.5-26.8V131.8l33.7 19.4L392.4 178zm8-105.3-80.2-46.2 80.2-46.2 80.2 46.2zm8 105.3V178L455 151.2l33.7-19.4v91.4h0z"/></svg>
        <label class="cursor-pointer" for="laravel">Laravel</label>
      </div>
      <div class="flex items-center justify-start gap-4 w-full transition-all fill-stroke hover:fill-text text-text px-10 select-none cursor-pointer">
        <input type="checkbox" id="symfony" name="symfony" value="symfony" class="checkbox">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm133.7 143.5c-11.5 .4-19.4-6.5-19.8-16.9-.3-9.2 6.7-13.4 6.5-18.9-.2-6.6-10.2-6.8-12.9-6.7-39.8 1.3-48.6 57-58.9 113.9 21.4 3.2 36.7-.7 45.1-6.2 12-7.8-3.3-15.7-1.4-24.6 4-18.2 32.6-19 32 5.3-.4 17.9-25.9 41.8-77.6 35.7-10.8 59.5-18.4 115-58.2 161.7-29 34.5-58.4 39.8-71.6 40.3-24.7 .9-41-12.3-41.6-29.8-.6-17 14.5-26.3 24.3-26.6 21.9-.8 30.1 25.7 14.9 34-12.1 9.7 .1 12.6 2.1 12.6 10.4-.4 17.3-5.5 22.2-9 24-20 33.2-54.9 45.4-118.4 8.2-49.7 17-78 18.2-82-16.9-12.8-27.1-28.6-49.9-34.7-15.6-4.2-25.1-.6-31.8 7.8-7.9 10-5.3 23 2.4 30.7l12.6 14c15.5 17.9 24 31.9 20.8 50.6-5.1 29.9-40.7 52.9-82.9 39.9-36-11.1-42.7-36.6-38.4-50.6 7.5-24.2 42.4-11.7 34.6 13.6-2.8 8.6-4.9 8.7-6.3 13.1-4.6 14.8 41.9 28.4 51-1.4 4.5-14.5-5.3-21.7-22.3-39.9-28.5-31.8-16-65.5 3-79.7C204.2 140.1 251.9 197 262 205.3c37.2-109 100.5-105.5 102.4-105.5 25.2-.8 44.2 10.6 44.8 28.7 .3 7.7-4.2 22.6-19.5 23.1z"/></svg>
        <label class="cursor-pointer" for="symfony">Symfony</label>
      </div>
    </div>
    <div class="flex-1 flex flex-wrap items-start justify-start w-full h-[calc(100vh-2.5rem-7rem-2.6rem)] max-h-[calc(100vh-2.5rem-7rem-2.6rem)] transition-all p-4 overflow-y-scroll">
      <div class="card p-4 flex flex-col gap-4" v-for="i in 100" :key="i">
        <h1 class="text-sp-blue">
          Project {{ i }}
          <span class="text-text">
            // _ui-website
          </span>
        </h1>
        <div class="bg-primary rounded p-4">
          <img src="https://source.unsplash.com/random/800x600" alt="Project {{ i }}" class="w-full h-48 object-cover rounded">
          <!-- tags -->
          <div class="flex items-center justify-start gap-2 mt-4">
            <span class="bg-sp-blue text-white rounded-full px-2 py-1 text-xs">React</span>
            <span class="bg-sp-green text-white rounded-full px-2 py-1 text-xs">HTML</span>
          </div>
          <p class="text-text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies tincidunt. Nullam nec dui in nunc ultricies tincidunt. Nullam nec dui in nunc ultricies tincidunt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .checkbox {
    background-color: transparent;
    cursor: pointer;
  }

  .card {
    flex-basis: calc((100% / 3));
  }
  @media (max-width: 1200px) {
    .card {
      flex-basis: calc((100% / 2));
    }
  }
  @media (max-width: 768px) {
    .card {
      flex-basis: calc(100%);
    }
  }
</style>