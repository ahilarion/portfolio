<script setup>

import NavigationButton from "@/components/NavigationButton.vue";
</script>

<template>
  <header class="w-full h-[50px] flex justify-between border-b border-b-stroke">
    <div class="md:flex hidden w-full items-stretch justify-between">
      <div class="md:flex hidden justify-start items-stretch text-text">
        <p class="flex items-center px-10 border-r border-stroke transition-all text-text w-[310px] select-none">
          alan-hilarion
        </p>
        <NavigationButton to="/">
          _hello
        </NavigationButton>
        <NavigationButton to="/about-me">
          _about-me
        </NavigationButton>
        <NavigationButton to="/projects">
          _projects
        </NavigationButton>
      </div>
      <NavigationButton to="/contact-me" left>
        _contact-me
      </NavigationButton>
    </div>
    <div class="md:hidden flex w-full items-stretch justify-between">
      <p class="flex items-center px-8 transition-all text-text select-none whitespace-nowrap">
        alan-hilarion
      </p>
      <!-- Hamburger menu -->
      <button class="flex items-center px-8 transition-all text-text select-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-text w-5 w-5" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>      </button>
    </div>
  </header>
</template>