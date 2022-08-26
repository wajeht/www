<script setup lang="ts">

const props = defineProps<{
    id?: number;
    title?: String;
    descriptions?: string[];
    technologies?: string[];
    links?: string[];
}>();

</script>

<template>
    <article class="bg-[color:#252420] p-5 rounded-md hover:bg-[color:#2A2924]">
        <h1 class="prose prose-lg text-[color:#FBF0DF] text-lg">{{ title }}</h1>
        <span class="flex flex-col gap-2">
            <p v-for="d, i in descriptions" :key="i" class="text-[color:#D4D3D2] font-light">{{ d }}</p>
        </span>
    </article>
</template>