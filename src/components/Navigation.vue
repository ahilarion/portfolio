<script setup>

import NavigationButton from "@/components/NavigationButton.vue";
</script>

<template>
  <header class="w-full h-[50px] flex justify-between border-b border-b-stroke">
    <div class="flex justify-start items-stretch text-text">
      <NavigationButton to="/" big>
        alan-hilarion
      </NavigationButton>
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
  </header>
</template>