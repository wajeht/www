<script setup lang="ts">

type Technology = {
    name: string;
    textColor: string;
    backgroundColor: string;
}

type Link = {
    name: string;
    url: string;
}

const props = defineProps<{
    id?: number;
    title?: string;
    images?: string[];
    descriptions?: string[];
    technologies?: Technology[];
    links?: Link[];
}>();

</script>

<template>
    <article class=" flex flex-col gap-3 bg-[color:#252420] p-5 rounded-sm hover:bg-[color:#2A2924]">

        <!-- title and description -->
        <span :class="{ 'flex flex-col gap-1': descriptions?.length && title?.length && technologies?.length }">

            <!-- title -->
            <h1 class="text-2xl text-[color:#FBF0DF]">{{ title }}</h1>

            <!-- image -->
            <img v-for="m, i in images" :key="i" :src="m"
                class="border-2 border-[color:#3C3C3C] object-cover grayscale hover:grayscale-0 rounded-sm max-h-[15rem]">

            <!-- badges -->
            <span v-if="technologies?.length" class="flex gap-1">
                <span v-for="t, i in technologies" :key="i" :class="t.backgroundColor, t.textColor"
                    class="px-1 py-0.5 text-xs rounded-xl grayscale hover:grayscale-0">{{ t.name
                    }}</span>
            </span>

            <!-- description -->
            <span v-if="descriptions?.length" class="flex flex-col gap-2">
                <p v-for="d, i in descriptions" :key="i" class="text-[color:#D4D3D2] font-light">{{ d }}</p>
            </span>
        </span>

        <!-- buttons -->
        <span v-if="links?.length" class="flex gap-2">
            <a v-for="l, i in links" :key="i" :href="l.url" target="_blank"
                class="py-1 px-4 rounded-sm font-light hover:outline  hover:outline-[color:#37362F] hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]">{{
                        l.name
                }}</a>
        </span>
    </article>
</template>