<script setup>

const props = defineProps({
  to: String,
  big: Boolean,
  left: Boolean,
});

</script>

<template>
  <router-link :to="to" class="nav-button" :class="{ 'w-[310px]': big, 'border-l': left, 'border-r': !left }">
    <slot></slot>
    <span class="underline"></span>
  </router-link>
</template>