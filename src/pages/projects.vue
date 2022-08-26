<script setup lang="ts">


interface Card {
    id?: number;
    title: String;
    description: string;
    technologies?: string[];
    links?: string[];
}

const projects = ref<Card[]>([
    {
        id: 1,
        title: 'attempt calculator',
        description: 'lorem Suscipit'
    },
    {
        id: 2,
        title: 'training log',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 3,
        title: 'unique login',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 4,
        title: 'gains',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 1,
        title: 'attempt calculator',
        description: 'lorem Suscipit'
    },
    {
        id: 2,
        title: 'training log',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 3,
        title: 'unique login',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 4,
        title: 'gains',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 1,
        title: 'attempt calculator',
        description: 'lorem Suscipit'
    },
    {
        id: 2,
        title: 'training log',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 3,
        title: 'unique login',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 4,
        title: 'gains',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 1,
        title: 'attempt calculator',
        description: 'lorem Suscipit'
    },
    {
        id: 2,
        title: 'training log',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 3,
        title: 'unique login',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
    {
        id: 4,
        title: 'gains',
        description: 'lorem Suscipit, accusantium iusto vel ipsum sequi fugiat est libero sunt nam eligendi, aperiam itaque asperiores nobis facilis doloremque ullam blanditiis rerum voluptas!'
    },
])

</script>
<template>
    <template class="flex flex-col gap-5">
        <Card v-for="p, i in projects" :key="p.id" :id="p.id" :title="`${i}-${p.title}`" :description="p.description" />
    </template>
</template>