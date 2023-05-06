<script setup lang="ts">
import type { Video } from '~/components/Card.vue';

const descriptions = ref<string[]>([
  "On no, can't find what you're looking for! Instead, watch me lifting some serious weight here",
]);

const video = ref<Video>({
  url: '/videos/squat.mp4',
  label: 'Play video',
  title: 'Squat video',
});
</script>

<template>
  <Card title="404" :descriptions="descriptions" :video="video" />
</template>
