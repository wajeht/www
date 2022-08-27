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
    subtitle?: string;
    title?: string;
    images?: string[];
    descriptions?: string[];
    technologies?: Technology[];
    links?: Link[];
}>();


const hydrate = ref(false);

</script>

<template>
    <article @mouseenter="hydrate = true" @mouseleave="hydrate = false"
        class=" flex flex-col gap-3 bg-[color:#252420] p-5 rounded-sm hover:bg-[color:#2A2924]">

        <!-- title and description -->
        <span :class="{ 'flex flex-col gap-1': descriptions?.length && title?.length && technologies?.length }">

            <!-- title -->
            <span class="flex flex-wrap items-center gap-2">
                <h1 class="text-2xl text-[color:#FBF0DF]">{{ title }}</h1>
                <span class="font-light text-[color:#D4D3D2]">{{ subtitle }}</span>
            </span>

            <!-- image -->
            <img v-for="m, i in images" :key="i" :src="m"
                class="border-2 border-[color:#3C3C3C] object-cover grayscale rounded-sm max-h-[15rem]"
                :class="{ 'grayscale-0': hydrate === true }">

            <!-- badges -->
            <span v-if="technologies?.length" class="flex flex-wrap gap-1 grayscale"
                :class="{ 'grayscale-0': hydrate === true }">
                <span v-for="t, i in technologies" :key="i" :class="t.backgroundColor, t.textColor"
                    class="px-1 py-0.5 text-xs rounded-xl  flex-none">
                    <span class="px-1">{{ t.name }}</span>
                </span>
            </span>

            <!-- description -->
            <span v-if="descriptions?.length" class="flex flex-col gap-2">
                <p v-for="d, i in descriptions" :key="i" class="text-[color:#D4D3D2] font-light">{{ d }}</p>
            </span>
        </span>

        <!-- buttons -->
        <span v-if="links?.length" class="flex flex-wrap gap-2">
            <a v-for="l, i in links" :key="i" :href="l.url" target="_blank"
                class="py-1 px-4 rounded-sm font-light hover:outline  hover:outline-[color:#37362F] hover:bg-[color:#0B0A08] bg-[color:#15140E] text-[color:#D4D3D2] hover:text-[color:#FBF0DF]">{{
                        l.name
                }}</a>
        </span>
    </article>
</template>