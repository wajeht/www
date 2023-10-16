<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();
const redirectedFromJawStrength = ref<boolean>(false);

if (route.query?.redirect === 'jawstrength.com' && route.query?.redirect !== undefined) {
  redirectedFromJawStrength.value = true;
}

const descriptions = ref<string[]>([]);

if (redirectedFromJawStrength.value === true) {
  descriptions.value = [
    'Thanks fro reaching out. I no longer provide coaching services.',
    'Here below are list of good resources on strength training.',
    '',
    '',
    'https://muscleandstrengthpyramids.com/',
    'https://liftvault.com/',
    'https://www.youtube.com/@RenaissancePeriodization',
    '',
    '',
    '- Jaw',
  ];
} else {
  descriptions.value = ['kyawsny at gmail dot com'];
}
</script>

<template>
  <Card :descriptions="descriptions" />
</template>
