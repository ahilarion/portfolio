<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

import { ref } from "vue";

const currentRoute = ref("/");

const changeCurrentRoute = (route) => {
  currentRoute.value = route;
}

</script>

<template>
  <div class="relative w-full border border-stroke rounded bg-[rgba(1,22,39,0.6)] flex flex-col items-center z-10">
    <Navigation :currentRoute="currentRoute" />
    <main class="flex-1 w-full">
      <router-view :changeCurrentRoute="changeCurrentRoute" />
    </main>
    <Footer />
  </div>
  <div class="blurry-gradient-blue"></div>
  <div class="blurry-gradient-green"></div>
</template>

<style scoped>
@keyframes oscillate {
  0%, 100% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
}

.blurry-gradient-blue, .blurry-gradient-green {
  animation: oscillate 5s infinite; /* 5s here is the duration of one oscillation cycle */
  position: fixed;
}

@media (min-width: 1024px) {
  .blurry-gradient-blue, .blurry-gradient-green {
    animation: oscillate 5s infinite;
  }
}

.blurry-gradient-blue, .blurry-gradient-green {
  filter: blur(70px);
  z-index: 0;
  position: fixed;
  width: 300px;
  height: 300px;
  opacity: .5;
}

.blurry-gradient-blue {
  background: radial-gradient(circle at 50% 50%, #4d5bce, rgba(76, 0, 255, 0));
  right: 5%;
  bottom: 25%;
  border-radius: 0 0 50% 50%;
  transform: rotate(10deg);
}

.blurry-gradient-green {
  background: radial-gradient(circle at 50% 50%, #4dce5b, rgba(0, 255, 76, 0));
  /* Adjust the position here */
  right: 15%;
  bottom: 35%;
  border-radius: 50% 0 100% 50%;
  transform: rotate(-10deg);
}

@media (min-width: 1024px) {
  .blurry-gradient-blue {
    border-radius: 100% 50% 100% 0;
    right: 10%;
    bottom: 10%;
    width: 500px;
    height: 500px;
    opacity: .7;
    transition: all 1s;
  }

  .blurry-gradient-green {
    border-radius: 50% 0 50% 100%;
    right: 30%;
    bottom: 50%;
    width: 400px;
    height: 400px;
    opacity: .7;
    transition: all 1s;
  }
}

@media (max-width: 1023px) {
  .blurry-gradient-blue {
    border-radius: 100% 50% 100% 0;
    right: -40%;
    bottom: -10%;
    width: 500px;
    height: 500px;
    opacity: .7;
  }

  .blurry-gradient-green {
    border-radius: 50% 0 50% 100%;
    right: -10%;
    bottom: 40%;
    width: 400px;
    height: 400px;
    opacity: .7;
  }
}
</style>