<script setup lang="ts">
const props = defineProps({
  error: Object,
});

if (props?.error?.statusCode === 404) {
  clearError({ redirect: '/404' });
} else {
  clearError({ redirect: '/' });
}
</script>

<template></template>
