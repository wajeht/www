<script setup lang="ts">
import { ref } from 'vue';

const arr = ref<string[]>([
  'As an athlete at heart, I am a disciplined individual who consistently pursues the highest standards in order to achieve rapid, high-quality results. My adaptability allows me to excel in various situations, enabling me to quickly learn and adopt new technologies, skills, and methodologies.',
  "My innate passion lies in problem-solving. To date, I have a proven track record of working with numerous businesses to boost their revenue, enhance internal operations, and significantly increase powerlifting totals for athletes. Moreover, I possess the ability to resolve business challenges through innovative software solutions. Allow me to apply my expertise in solving your problems and contributing to your company's growth!",
]);

const video = ref({
  url: '/videos/deadlift.mp4',
  label: "Don't click this!",
  title: 'Sumo deadlift: 655 lbs.',
});
</script>

<template>
  <Card :descriptions="arr" :video="video" />
</template>

<style>
* {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

*::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

html {
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0;
}

body {
  background-color: #0b0a08 !important;
}
</style>
