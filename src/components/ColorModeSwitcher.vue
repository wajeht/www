<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <select class="bg-black" v-model="$colorMode.preference">
    <option value="light">🌞</option>
    <option value="dark">🌙</option>
  </select>
</template>
