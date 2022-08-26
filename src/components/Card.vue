<script setup lang="ts">

const props = defineProps<{
    id?: number;
    title?: String;
    description?: string;
    technologies?: string[];
    links?: string[];
}>();

</script>

<template>
    <article class="bg-[color:#252420] p-5 rounded-md hover:bg-[color:#2A2924]">
        <h1 class="prose prose-lg text-[color:#FBF0DF] text-lg">{{ title }}</h1>
        <p class="text-[color:#D4D3D2] font-light">{{ description }}</p>
    </article>
</template>