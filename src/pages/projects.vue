<script setup lang="ts">

import projects from '../utils/projects'

</script>
<template>
    <div class="columns-1 2xl:columns-2">
        <Card :class="{ 'mb-4': i != projects?.length - 1 }" class="lg:h-full lg:w-full lg:break-inside-avoid-column"
            v-once v-for="p, i in projects" :key="i" :title="p.title" :subtitle="p.subtitle" :wip="p.wip"
            :video="p.video" :descriptions="p.descriptions" :technologies="p.technologies" :images="p.images"
            :current="p.current" :links="p.links" />
    </div>
</template>