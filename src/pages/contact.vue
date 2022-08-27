<script setup lang="ts">
import { ref } from 'vue';

const descriptions = ref([
    "kyawsny at gmail dot com"
]);

</script>

<template>
    <Card :descriptions="descriptions" />
</template>