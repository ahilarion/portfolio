<script setup>

import NavigationButton from "@/components/NavigationButton.vue";
import {onMounted} from "vue";

// set a function to handle the title and the current active route for the navigation

const props = defineProps({
  currentRoute: String
});

const routes = [
  {
    name: "_hello", path: "/"
  },
  {
    name: "_about-me", path: "/about-me"
  },
  {
    name: "_projects", path: "/projects"
  },
  {
    name: "_contact-me", path: "/contact-me"
  }
]



</script>

<template>
  <header class="w-full h-[50px] flex justify-between border-b border-b-stroke">
    <div class="md:flex hidden w-full items-stretch justify-between">
      <div class="md:flex hidden justify-start items-stretch text-text">
        <router-link href="/" class="flex items-center justify-between px-10 border-r border-stroke transition-all text-text w-[310px] select-none smiley" to="/">
          alan-hilarion <span class="text-sp-blue">ಠ_ರೃ</span>
        </router-link>
        <NavigationButton to="/" :active="currentRoute === '/'">
          _hello
        </NavigationButton>
        <NavigationButton to="/about-me" :active="currentRoute === '/about-me'">
          _about-me
        </NavigationButton>
        <NavigationButton to="/projects" :active="currentRoute === '/projects'">
          _projects
        </NavigationButton>
      </div>
      <NavigationButton to="/contact-me" left :active="currentRoute === '/contact-me'">
        _contact-me
      </NavigationButton>
    </div>
    <div class="md:hidden flex w-full items-stretch justify-between">
      <router-link to="/" class="flex items-center px-5 transition-all text-text select-none whitespace-nowrap justify-between">
        alan-hilarion
      </router-link>
      <!-- Hamburger menu -->
      <button class="flex items-center px-5 transition-all text-text select-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-text w-5 h-5" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </button>
    </div>
  </header>
</template>